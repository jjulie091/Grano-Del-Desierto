import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";
import vue from '@astrojs/vue';
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // Add your domain here
   site: 'https://github.com/jjulie091/Grano-Del-Desierto',
  integrations: [sitemap(), vue()],
  output: 'static', // Asegura que la salida sea estática
  outDir: 'dist',  // Aquí defines la carpeta de salida
});