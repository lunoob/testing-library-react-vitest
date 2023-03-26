import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: [
            `${__dirname}/test/setupFiles.ts`
        ],
        alias: {
            src: `${__dirname}/src`,
            pages: `${__dirname}/src/pages`
        }
    }
})