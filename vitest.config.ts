import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default defineConfig(async (configEnv) => {
  const viteConfigResolved = await viteConfig(configEnv);

  return mergeConfig(viteConfigResolved, {
    test: {
      projects: [
        {
          plugins: [
            storybookTest({
              // The location of your Storybook config, main.js|ts
              configDir: ".storybook",
              // This should match your package.json script to run Storybook
              // The --ci flag will skip prompts and not open a browser
              storybookScript: "bun storybook --ci",
            }),
          ],
          test: {
            name: "storybook",
            // Enable browser mode
            browser: {
              enabled: true,
              // Make sure to install Playwright
              provider: "playwright",
              headless: true,
              instances: [{ browser: "chromium" }],
            },
            setupFiles: ["./.storybook/vitest.setup.ts"],
          },
        },
      ],
    },
  });
});
