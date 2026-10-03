// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import cloudflare from '@astrojs/cloudflare';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  
  // EXTENSIONS/INTEGRATIONS
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx(), alpinejs()],
  adapter: cloudflare(),
  
  // PREFETCH
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  
  // MARKDOWN CONFIG
  markdown: {
    shikiConfig: {
      theme: 'gruvbox-dark-hard',
    }
  },

  // FONTS USAGE
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Fira Code",
      cssVariable: "--font-fira-code",
      weights: [300, 400, 500, 600, 700, 800, 900],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Ubuntu Sans Mono",
      cssVariable: "--font-ubuntu-mono",
      // weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      weights: [300, 400, 500, 600],
    },
  ],
});