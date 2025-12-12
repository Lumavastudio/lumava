// app/head.tsx
export default function Head() {
  return (
    <>
      {/* Favicon */}
      <link rel="icon" href="/lumava-favicon.ico?v=1" />
      <link rel="icon" type="image/png" sizes="32x32" href="/lumava-32x32.png?v=1" />
      <link rel="icon" type="image/png" sizes="16x16" href="/lumava-16x16.png?v=1" />
      <link rel="icon" type="image/svg+xml" href="/lumava-favicon.svg?v=1" />

      {/* Apple touch icon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/lumava-apple-touch-icon.png?v=1" />

      {/* Web manifest */}
      <link rel="manifest" href="/lumava-site.webmanifest?v=1" />

      {/* Theme color */}
      <meta name="theme-color" content="#000000" />

      {/* Optional: SEO meta */}
      <title>Lumava Studio</title>
      <meta
        name="description"
        content="Crafting cinematic visuals & immersive experiences for brands and creators."
      />
    </>
  );
}

