import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Otimizações para produção
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false, // Manter console para debug se necessário
        drop_debugger: true,
      },
    },
    // Melhor splitting de código
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-select'],
        },
      },
    },
    // Aumentar limite de chunk warning
    chunkSizeWarningLimit: 1000,
    // Otimizar assets
    assetsInlineLimit: 4096,
  },
  // Garantir base correta para todos os ambientes
  base: './',
}));
