import { resolve } from "path";
import { searchForWorkspaceRoot } from "vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	nitro: {
		experimental: {
			websocket: true,
		},
		imports: {
			dirs: [
				resolve(__dirname, "./shared/models"),
				resolve(__dirname, "./shared/models/interfaces"),
				resolve(__dirname, "./shared/errors"),
				resolve(__dirname, "./shared/enums"),
				resolve(__dirname, "./shared/dtos"),
				resolve(__dirname, "./server/repositories"),
				resolve(__dirname, "./server/clients"),
				resolve(__dirname, "./server/services"),
				resolve(__dirname, "./server/events"),
				resolve(__dirname, "./server/instances"),
			],
		},
	},
	vite: {
		server: {
			fs: {
				allow: [searchForWorkspaceRoot(process.cwd()), "/prisma/generated"],
			},
		},
	},
	modules: [
		"@nuxt/icon",
		"@nuxtjs/google-fonts",
		"@nuxtjs/i18n",
		"@nuxtjs/tailwindcss",
		"nuxt-auth-utils",
		"vuetify-nuxt-module",
		"@nuxt/test-utils/module",
		"@nuxt/eslint",
	],

	googleFonts: {
		families: {
			"Cinzel Decorative": true,
		},
	},

	i18n: {
		defaultLocale: "ja",
		locales: [{ code: "ja", name: "日本語", file: "ja.json" }],
	},

	runtimeConfig: {
		nodeEnv: process.env.NODE_ENV,
		databaseUrl: process.env.DATABASE_URL
	}
});
