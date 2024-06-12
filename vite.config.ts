import { defineConfig } from 'vite'
import { viteSingleFile } from "vite-plugin-singlefile";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  // https://vitejs.dev/guide/static-deploy.html#github-pages
  base: "/cid-generator/",
  plugins: [svelte(), viteSingleFile()]
});
