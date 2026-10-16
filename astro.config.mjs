// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';
// import icon from "astro-icon";
// import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  
  // PREFETCH
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  // EXTENSIONS/INTEGRATIONS
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx()],
  adapter: cloudflare(),
  
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
      name: "Atkinson Hyperlegible Next",
      cssVariable: "--font-hyper-next",
      weights: [300, 400, 500, 600, 700],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Fira Code",
      cssVariable: "--font-fira-code",
      weights: [300, 400, 500, 600],
    },
  ],
});