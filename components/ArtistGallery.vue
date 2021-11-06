<template>
	<div
		class="container mx-auto px-6 md:px-0 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 my-24"
	>
		<div :key="image.id" v-for="image in block.images" class="h-64 overflow-hidden">
			<img class="w-full" :src="image.filename" :alt="image.alt" lazy />
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			block: {
				type: Object,
				required: true,
			},
		},
	};
</script>

<style lang="postcss" scoped></style>
