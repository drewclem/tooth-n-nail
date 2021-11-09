require('dotenv').config();

const isPreview = process.env.NODE_ENV === 'development';

export default {
	// Target (https://go.nuxtjs.dev/config-target)
	target: 'static',

	env: {
		NODE_ENV: process.env.NODE_ENV,
		ACCESS_TOKEN: process.env.ACCESS_TOKEN,
		PREVIEW: isPreview,
	},

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'tooth-n-nail',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: ['@/assets/css/styles.css'],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: ['~/plugins/components'],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		'@nuxtjs/svg',
		'@nuxtjs/axios',
		[
			'storyblok-nuxt',
			{
				accessToken: process.env.ACCESS_TOKEN,
				cacheProvider: 'memory',
			},
		],
	],

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {},
};
