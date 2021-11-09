<template>
	<section>
		<component
			v-if="story.content.component"
			:key="story.content._uid"
			:block="story.content"
			:page-name="story.name"
			:is="story.content.component"
		/>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				story: { content: {} },
			};
		},
		mounted() {
			this.$storybridge(
				() => {
					const storyblokInstance = new StoryblokBridge();

					// Listen to Storyblok's Visual Editor event
					storyblokInstance.on(['input', 'published', 'change'], (event) => {
						if (event.action == 'input') {
							if (event.story.id === this.story.id) {
								this.story.content = event.story.content;
							}
						} else {
							this.$nuxt.$router.go({
								path: this.$nuxt.$router.currentRoute,
								force: true,
							});
						}
					});
				},
				(error) => {
					console.error(error);
				}
			);
		},
		async asyncData(context) {
			const fullSlug =
				context.route.path == '/' || context.route.path == '' ? 'home' : context.route.path;

			const version =
				context.query._storyblok || context.query.preview || context.isDev || context.env.PREVIEW
					? 'draft'
					: 'published';

			let res;

			try {
				res = await context.app.$storyapi.get(`cdn/stories/${fullSlug}`, {
					version,
				});
				return res.data;
			} catch (e) {
				if (!e.response) {
					console.error(res);
					context.error({
						statusCode: 404,
						message: 'Failed to receive content from api',
					});
				}
			}
		},
		async fetch(context) {
			// check if global data has been loaded
			// this method found in Storyblok + Nuxt tutorial
			const version = context.query._storyblok || context.env.PREVIEW ? 'draft' : 'published';

			if (!context.store.state.global.loaded) {
				const globalsRes = await context.app.$storyapi.get('cdn/stories/navigation', {
					version,
				});
				context.store.commit('global/setGlobals', globalsRes.data.story.content);
				context.store.commit('global/setLoaded', true);
			}
		},
	};
</script>
