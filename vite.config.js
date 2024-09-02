import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext', // modern JavaScript for better performance
    outDir: 'dist',
    rollupOptions: {
      input: './src/index.js',
      output: {
        entryFileNames: 'bundle.js',
        format: 'cjs', // CommonJS format for Node.js
      },
    },
  },
});
