import { defineConfig } from 'vite'
import { viteSingleFile } from "vite-plugin-singlefile";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte(), viteSingleFile()]
});
