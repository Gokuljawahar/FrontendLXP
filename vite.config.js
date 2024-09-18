import { defineConfig } from 'vite';
 import react from '@vitejs/plugin-react';
 import viteTsconfigPaths from 'vite-tsconfig-paths';
 import browserslistToEsbuild from 'browserslist-to-esbuild';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), viteTsconfigPaths()],
    server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 5173
    port: 5173,
},
    esbuild: {
        loader:  'jsx', // Tell esbuild to handle .js files as JSX 
    },
    build: {
        // --> ["chrome79", "edge92", "firefox91", "safari13.1"]
        target: browserslistToEsbuild(['>0.2%', 'not dead', 'not op_mini all']),
        outDir: 'build', // Default output directory for production build
    },
});
            