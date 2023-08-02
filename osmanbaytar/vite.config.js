import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import imagePresets, { widthPreset } from "vite-plugin-image-presets";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.mp4"],
  plugins: [
    react(),
    imagePresets({
      thumbnail: widthPreset({
        class: "img thumb",
        loading: "lazy",
        widths: [48, 96],
        formats: {
          webp: { quality: 50 },
          jpg: { quality: 70 },
        },
      }),
    }),
  ],
});
