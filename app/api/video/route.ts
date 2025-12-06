import fs from "fs";
import path from "path";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const file = url.searchParams.get("file");

    if (!file) {
      return new Response("Missing file parameter", { status: 400 });
    }

    // امنیت: فقط مسیرهای داخل /portfolio اجازه داده شده
    if (!file.startsWith("/portfolio")) {
      return new Response("Invalid file path", { status: 403 });
    }

    // مسیر کامل فایل داخل public
    const videoPath = path.join(process.cwd(), "public", file);

    console.log("Looking for file:", videoPath);

    if (!fs.existsSync(videoPath)) {
      console.log("File not found!");
      return new Response("File not found", { status: 404 });
    }

    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.get("range");

    // اگر Range داده نشده → کل فایل
    if (!range) {
      const buffer = fs.readFileSync(videoPath);
      return new Response(buffer, {
        status: 200,
        headers: {
          "Content-Type": "video/mp4", // m4v هم video/mp4
          "Content-Length": fileSize.toString(),
        },
      });
    }

    // Range داده شده → partial content برای streaming
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunkSize = end - start + 1;

    const nodeStream = fs.createReadStream(videoPath, { start, end });

    const stream = new ReadableStream({
      start(controller) {
        nodeStream.on("data", (chunk) => controller.enqueue(chunk));
        nodeStream.on("end", () => controller.close());
        nodeStream.on("error", (err) => controller.error(err));
      },
    });

    return new Response(stream, {
      status: 206,
      headers: {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunkSize.toString(),
        "Content-Type": "video/mp4",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response("Server error", { status: 500 });
  }
}
