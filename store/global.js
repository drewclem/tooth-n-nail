export const state = () => ({
	loaded: false,
	globals: null,
	logo: null,
	mainNav: null,
	phoneNumber: null,
	socialLinks: null,
});

export const mutations = {
	setGlobals(state, globals) {
		state.globals = globals;
		state.logo = globals.logo;
		state.mainNav = globals.menu;
		state.phoneNumber = globals.phoneNumber;
		state.socialLinks = globals.socialLinks;
	},
	setLoaded(state, loaded) {
		state.loaded = loaded;
	},
};
