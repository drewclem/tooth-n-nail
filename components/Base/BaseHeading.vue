<template>
	<div class="relative flex">
		<TwoDiamond
			class="absolute w-8 h-12 lg:w-12 lg:h-16 -ml-10 -mt-1 transform rotate-180 text-yellow-500"
		/>
		<slot />
	</div>
</template>

<script>
	import TwoDiamond from '../../assets/svg/TwoDiamond';

	export default {
		components: {
			TwoDiamond,
		},
	};
</script>

<style lang="postcss" scoped></style>
