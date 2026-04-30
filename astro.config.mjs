import { defineConfig, sharpImageService } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sapium.ai',
  integrations: [react(), sitemap()],
  image: {
    service: sharpImageService(),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
