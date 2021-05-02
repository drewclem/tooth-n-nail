<script>
	/*
	 * What is this component? What does it do?
	 */

	export default {
		name: 'BannerHeading',
	};
</script>

<template>
	<a href="#" class="relative group flex py-8 z-50">
		<h3
			class="font-display text-4xl italic font-bold transform origin-bottom-left -rotate-9 group-hover:text-yellow-500 ml-12"
		>
			<slot></slot>
		</h3>
	</a>
</template>

<style lang="postcss" scoped>
	a {
		background-image: url(../../assets/svg/banner.svg);
		background-repeat: no-repeat;
	}
</style>
