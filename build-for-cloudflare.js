// Build script for Cloudflare Pages deployment
import { copyFileSync, readdirSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

// Copy server.js to _worker.js for Cloudflare Pages
try {
  const serverPath = join('dist', 'server', 'server.js');
  const workerPath = join('dist', '_worker.js');
  
  if (existsSync(serverPath)) {
    copyFileSync(serverPath, workerPath);
    console.log('✓ Copied server.js to _worker.js');
  } else {
    console.error('Error: dist/server/server.js not found');
    process.exit(1);
  }
} catch (error) {
  console.error('Error building for Cloudflare:', error);
  process.exit(1);
}
