/** @type {import('next').NextConfig} */

// GitHub Pages serves a project site from a subpath (/<repo>), so we set a
// base path in CI via NEXT_PUBLIC_BASE_PATH. Locally it stays empty, so
// `npm run dev` works at the root. Move to a custom domain later by simply
// leaving the env var unset.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  // Emit a fully static site into ./out for static hosting (GitHub Pages).
  output: "export",
  basePath,
  // Pages serves directories, so emit /about/index.html etc.
  trailingSlash: true,
  // No Next.js Image Optimization server on static hosts.
  images: { unoptimized: true },
};

export default nextConfig;
