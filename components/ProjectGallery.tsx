import Image from "next/image";
import { MediaItem } from "@/data/portfolio";

function FullWidthImage({ src, caption }: { src: string; caption?: string }) {
  return (
    <div className="w-full my-8">
      <div className="relative w-full h-[52vh] md:h-[60vh] overflow-hidden rounded-xl">
        <Image src={src} alt={caption || ""} fill className="object-cover" />
      </div>
      {caption && <p className="text-sm text-white/70 mt-3">{caption}</p>}
    </div>
  );
}

function TwoColumnStack({ left, right }: { left: MediaItem; right?: MediaItem }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      <div className="relative w-full h-[60vh] md:h-[56vh] overflow-hidden rounded-xl">
        {left.type === "image" ? (
          <Image src={left.src} alt={left.caption || ""} fill className="object-cover" />
        ) : (
          <video src={left.src} controls playsInline className="w-full h-full object-cover" />
        )}
      </div>

      {right && (
        <div className="relative w-full h-[60vh] md:h-[56vh] overflow-hidden rounded-xl">
          {right.type === "image" ? (
            <Image src={right.src} alt={right.caption || ""} fill className="object-cover" />
          ) : (
            <video src={right.src} controls playsInline className="w-full h-full object-cover" />
          )}
        </div>
      )}
    </div>
  );
}

export default function ProjectGallery({ media }: { media: MediaItem[] }) {
  // simple greedy layout: iterate media and decide block type
  const blocks: React.ReactNode[] = [];
  for (let i = 0; i < media.length; i++) {
    const item = media[i];

    if (item.type === "video") {
      // videos = full-width cinematic
      blocks.push(<FullWidthImage key={i} src={item.src} caption={item.caption} />);
      continue;
    }

    // image logic:
    // prefer: horizontal → full-width; vertical → two-column stack (paired if possible)
    if (item.type === "image" && item.orientation === "horizontal") {
      blocks.push(<FullWidthImage key={i} src={item.src} caption={item.caption} />);
      continue;
    }

    // if vertical, try to pair with next vertical
    if (item.type === "image" && item.orientation === "vertical") {
      const next = media[i + 1];
      if (next && next.type === "image" && next.orientation === "vertical") {
        blocks.push(<TwoColumnStack key={i} left={item} right={next} />);
        i += 1; // skip next
      } else {
        // single vertical → show as a tall full-width block but with narrower height
        blocks.push(
          <div key={i} className="my-8">
            <div className="relative w-full h-[72vh] md:h-[80vh] overflow-hidden rounded-xl">
              <Image src={item.src} alt={item.caption || ""} fill className="object-cover" />
            </div>
            {item.caption && <p className="text-sm text-white/70 mt-3">{item.caption}</p>}
          </div>
        );
      }
    }
  }

  return <div className="w-full">{blocks}</div>;
}
