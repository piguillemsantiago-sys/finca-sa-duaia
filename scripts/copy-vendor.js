/* Copies the production React UMD builds from node_modules into js/vendor/
 * so the site serves them locally instead of from a CDN. */
const fs = require("fs");
const path = require("path");

const out = path.join(__dirname, "..", "js", "vendor");
fs.mkdirSync(out, { recursive: true });

const files = [
  ["react", "umd/react.production.min.js", "react.production.min.js"],
  ["react-dom", "umd/react-dom.production.min.js", "react-dom.production.min.js"],
];

for (const [pkg, rel, dest] of files) {
  const src = path.join(__dirname, "..", "node_modules", pkg, rel);
  fs.copyFileSync(src, path.join(out, dest));
  console.log("vendored", dest);
}
