import { defineConfig } from "cypress";
import { addMatchImageSnapshotPlugin } from "@simonsmith/cypress-image-snapshot/plugin";

export default defineConfig({
  e2e: {
    viewportWidth: 1200,
    setupNodeEvents(on) {
      addMatchImageSnapshotPlugin(on)
    },
  },
});
