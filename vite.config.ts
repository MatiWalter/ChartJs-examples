import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { dependencies } from './package.json';

const bigLibs = [
  { regExp: /^@mantine\/core*/, chunkName: "@mantine/core" },
  { regExp: /^@mantine\/prism*/, chunkName: "@mantine/prism" },
  { regExp: /^chart.js*/, chunkName: "chart.js" },
];

function getManualChunks(deps: Record<string, string>) {
  return Object.keys(deps).reduce(
    (prev, cur) => {
      let isBigLib = false;
      for (const l of bigLibs) {
        if (l.regExp.test(cur)) {
          isBigLib = true;
          if (prev[l.chunkName]) {
            prev[l.chunkName].push(cur);
          } else {
            prev[l.chunkName] = [cur];
          }
          break;
        }
      }
      if (!isBigLib) prev.vendors.push(cur);
      return prev;
    },
    { vendors: [] } as Record<string, string[]>
  );
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("@mantine/core")) {
              return "@mantine/core";
            } else if (id.includes("@mantine/prism")) {
              return "@mantine/prism";
            } else if (id.includes("chart-js")) {
              return "chart-js";
            }
          }
        },
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './Charts')
      }
    ],
  }
})
