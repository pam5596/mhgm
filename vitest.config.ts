import { defineVitestProject } from "@nuxt/test-utils/config";
import { defineConfig } from "vitest/config";
import AutoImport from "unplugin-auto-import/vite"
import { resolve } from 'node:path'

export default defineConfig({
	plugins: [
		AutoImport({
      imports: [
        'vitest',
        {
          'h3': [
            'defineEventHandler',
            'getRouterParam',
            'getQuery',
            'readBody',
            'createError',
            'setResponseStatus',
            'sendError',
            // 他に使っているh3関数があれば追加
          ],
        },
      ],
      dirs: [
        resolve(__dirname, './shared/models/**'),
        resolve(__dirname, './shared/errors'),
        resolve(__dirname, './shared/enums'),
        resolve(__dirname, './shared/dtos/**'),
        resolve(__dirname, './server/repositories'),
        resolve(__dirname, './server/clients'),
        resolve(__dirname, './server/services/**'),
        resolve(__dirname, './server/instances'),
				resolve(__dirname, './test/integration/**'),
      ],
      dts: resolve(__dirname, './vitest-auto-imports.d.ts'),
      vueTemplate: false,
    }),
	],
	resolve: {
		tsconfigPaths: true,
	},
	test: {
		globals: true,
		projects: [
			{
				extends: true,
				test: {
					name: "unit",
					include: ["test/unit/**/*.{test,spec}.ts"],
					environment: "node",
					globals: true
				},
			},
			{
				extends: true,
				test: {
					name: "integration",
					include: ["test/integration/**/*.{test,spec}.ts"],
					environment: "node",
					globals: true
				},
			},
			{
				extends: true,
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
