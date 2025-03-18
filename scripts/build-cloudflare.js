// Build script for Cloudflare Pages
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name properly in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the build directories
const rootDir = path.join(__dirname, '..');
const buildDir = path.join(rootDir, 'build');
const clientDir = path.join(buildDir, 'client');

console.log('Preparing Cloudflare Pages deployment...');

// Create _routes.json file for SPA routing in Cloudflare Pages
const routesJson = {
  version: 1,
  include: ['/*'],
  exclude: ['/build/*', '/assets/*', '/*.ico', '/*.jpg', '/*.png', '/*.gif', '/*.svg', '/favicon.ico'],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
};

// Write the routes file
fs.writeFileSync(
  path.join(clientDir, '_routes.json'),
  JSON.stringify(routesJson, null, 2)
);

// Create a .nojekyll file to prevent GitHub Pages processing (just in case)
fs.writeFileSync(path.join(clientDir, '.nojekyll'), '');

console.log('Cloudflare Pages build preparation complete!'); 