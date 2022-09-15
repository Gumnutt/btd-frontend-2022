import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import postcssJitProps from "postcss-jit-props"
import OpenProps from "open-props"
import postcssCustomMedia from "postcss-custom-media"
import postcssNested from "postcss-nested"
import { VitePluginFonts } from "vite-plugin-fonts"

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.mdx"],
  css: {
    postcss: {
      plugins: [
        postcssNested,
        postcssJitProps(OpenProps),
        postcssCustomMedia({
          importFrom: "./node_modules/open-props/media.min.css",
        }),
      ],
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    VitePluginFonts({
      google: {
        families: [
          "Space Mono",
          {
            name: "Nunito",
            styles: "wght@400;700",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
