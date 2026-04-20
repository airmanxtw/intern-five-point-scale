import { defineConfig } from 'vite';
import { readFileSync } from 'fs';

const { version } = JSON.parse(readFileSync('./package.json', 'utf-8'));

export default defineConfig({
  build: {  
    minify: 'terser',   
    lib: {
      entry: 'src/intern-five-point-scale.js',
      name: 'InternFivePointScale',
      fileName: () => `intern-five-point-scale-${version}.js`,
      formats: ['es'],
    },
  },
});
