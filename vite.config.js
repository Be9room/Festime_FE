import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import mkcert from "vite-plugin-mkcert";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    mkcert(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: { enabled: true, outDir: "dev-dist" },
      buildOptions: {
        outDir: "dist"
      },
      manifest: {
        name: "2024 비룡제",
        short_name: "비룡제",
        description: "역사를 개혁한 인하, 혁신으로 나아가다",
        theme_color: "#1a1a1a",
        background_color: "#1a1a1a",
        display: "standalone",
        start_url: ".",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ]
});
