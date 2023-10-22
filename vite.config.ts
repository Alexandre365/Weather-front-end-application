import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // eslint-disable-next-line prettier/prettier
  base: "/Weather-front-end-application",
  plugins: [react()],
});
