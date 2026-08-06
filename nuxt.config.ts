import { resolve } from "path";
import { searchForWorkspaceRoot } from "vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	app: {
		head: {
			title: 'MHGM',
			titleTemplate: 'MHGM - %s',
			link: [
				{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
			]
		},
	},
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
				resolve(__dirname, "./server/instances"),
			],
		},
	},
	routeRules: {
		'/api/private/**': {
			cors: true,
			headers: {
				'access-control-allow-origin': process.env.STATERUL_API_BASE_URL,
				'access-control-allow-credentials': 'true',
			}
		},
		'/api/public/webhooks/member': {
			proxy: `${process.env.STATERUL_API_BASE_URL}/mhgm/public/webhooks/member`
		}
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
		"@nuxt/image"
	],

	googleFonts: {
		families: {
			"Cinzel Decorative": {
				regular: 700
			}
		},
	},

	i18n: {
		defaultLocale: "ja",
		locales: [{ code: "ja", name: "日本語", file: "ja.json" }],
		experimental: {
			localeDetector: 'localeDetector.ts'
		}
	},

	runtimeConfig: {
		nodeEnv: process.env.NODE_ENV,
		databaseUrl: process.env.DATABASE_URL,
	}
});