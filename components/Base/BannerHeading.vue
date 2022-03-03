<script>
	/*
	 * What is this component? What does it do?
	 */

	export default {
		name: 'BannerHeading',
		props: {
			link: {
				type: String,
			},
		},
	};
</script>

<template>
	<nuxt-link v-if="link" :to="link" class="relative group flex py-8 z-50">
		<h3
			class="uppercase font-display text-3xl italic font-bold transform origin-bottom-left mt-1 -rotate-9 group-hover:text-yellow-500 ml-12 transition ease-in-out duration-150"
		>
			<slot></slot>
		</h3>
	</nuxt-link>
	<div class="relative flex py-8 z-50" v-else>
		<h3
			class="uppercase font-display text-3xl italic font-bold transform origin-bottom-left -rotate-9 ml-12"
		>
			<slot></slot> </h3
	></div>
</template>

<style lang="postcss" scoped>
	a,
	div {
		background-image: url(../../assets/svg/banner.svg);
		background-repeat: no-repeat;
	}
</style>
