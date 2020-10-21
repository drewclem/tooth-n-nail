module.exports = {
	purge: {
		enabled: true,
		content: [
			'./assets/css/*.css',
			'./assets/svg/*.vue',
			'./components/Base/*.vue',
			'./components/Global/*.vue',
			'./components/Home/*.vue',
			'./layouts/*.vue',
			'./pages/*.vue',
		],
	},
	theme: {
		extend: {
			fontFamily: {
				display: ['Barlow Semi Condensed', 'Helvetica', '-apple-system', 'sans-serif'],
			},
			colors: {
				black: {
					900: '#1c1b17',
				},
				yellow: {
					200: '#F9EBD5',
					500: '#eb9001',
				},
			},
		},
	},
};
