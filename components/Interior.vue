<template>
	<div class="max-w-2xl mx-auto px-6">
		<BaseHeading class="ml-8 mb-12">
			<h1 class="text-shadow relative text-3xl lg:text-5xl leading-tight uppercase italic ml-4">
				Something stupid
			</h1>
		</BaseHeading>
		<div v-editable="block">
			<component
				v-for="block in block.sections"
				:key="block._uid"
				:block="block"
				:is="block.component"
			/>
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
