// Static export: `npm run build` writes a plain website to the `out` folder.
// BASE_PATH is only needed on GitHub Pages when the repo isn't <username>.github.io
const basePath = process.env.BASE_PATH || "";

export default {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
