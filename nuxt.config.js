export default {
	// Target (https://go.nuxtjs.dev/config-target)
	target: 'static',

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'Tooth & Nail | Tattoo parlour',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{
				hid: 'og:url',
				proptery: 'og:url',
				content: 'https://tntparlour.com',
			},
			{
				hid: 'og:title',
				property: 'og:title',
				content: 'Tooth & Nail | Tattoos',
			},
			{
				hid: 'og:description',
				property: 'og:description',
				content: "Macon Georgia's premier tattoo parlour. Lowbrow with know how.",
			},
			{
				hid: 'og:image',
				property: 'og:image',
				content: '/og-image.png',
			},
			{
				hid: 'twitter:url',
				proptery: 'twitter:url',
				content: 'https://tntparlour.com',
			},
			{
				hid: 'twitter:title',
				property: 'twitter:title',
				content: 'Tooth & Nail | Tattoos',
			},
			{
				hid: 'twitter:description',
				property: 'twitter:description',
				content: "Macon Georgia's premier tattoo parlour. Lowbrow with know how.",
			},
			{
				hid: 'twitter:card',
				name: 'twitter:card',
				content: 'summary_large_image',
			},
			{
				hid: 'twitter:image',
				property: 'twitter:image',
				content: '/og-image.png',
			},
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: ['@/assets/css/styles.css'],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: ['@nuxtjs/svg'],

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {},
};
