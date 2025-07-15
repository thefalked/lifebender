import { setProjectAnnotations } from "@storybook/react-vite";
import { beforeAll } from "vitest";
// biome-ignore lint/performance/noNamespaceImport: storybook guide
import * as previewAnnotations from "./preview";

const annotations = setProjectAnnotations([previewAnnotations]);

// Run Storybook's beforeAll hook
beforeAll(annotations.beforeAll);
