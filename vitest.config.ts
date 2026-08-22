import { defineVitestProject } from "@nuxt/test-utils/config";
import { defineConfig } from "vitest/config";

export default defineConfig({
	resolve: {
		tsconfigPaths: true,
	},
	test: {
		globals: true,
		projects: [
			{
				test: {
					name: "unit",
					include: ["test/unit/**/*.{test,spec}.ts"],
					environment: "node",
				},
			},
			{
				test: {
					name: "integration",
					include: ["test/integration/**/*.{test,spec}.ts"],
					environment: "node",
				},
			},
			{
				test: {
					name: "e2e",
					include: ["test/e2e/**/*.{test,spec}.ts"],
					environment: "node",
				},
			},
			await defineVitestProject({
				test: {
					name: "nuxt",
					include: ["test/nuxt/**/*.{test,spec}.ts"],
					environment: "nuxt",
				},
			}),
		],
	},
});
