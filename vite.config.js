import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
   port: 8080,
   strictPort: true,
  },
  server: {
   port: 8080,
   strictPort: true,
   host: true,
   origin: "http://0.0.0.0:8080",
  },
 });

/*
export default defineConfig({
  base: process.env.NODE_ENV === 'production' 
        ? '/mywebsite-2/'  // Use the repo name for production (GitHub Pages)
        : '/',   
  plugins: [react()],
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: "http:0.0.0.0:8080",
  },
});*/