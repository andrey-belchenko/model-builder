# Fix dependencies and start the development server
Write-Host "Fixing dependencies for Node.js compatibility..." -ForegroundColor Green

# Remove existing problematic dependencies
pnpm remove vite @vitejs/plugin-vue

# Install compatible versions
pnpm add -D vite@5.4.2 @vitejs/plugin-vue@4.2.1

Write-Host "Dependencies updated. Starting development server..." -ForegroundColor Green

# Start the development server
pnpm dev
