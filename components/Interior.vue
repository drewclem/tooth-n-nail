<template>
	<div class="max-w-2xl mx-auto px-6">
		<div>
			<BaseHeading :class="`ml-8 ${block.subtitle ? 'mb-4' : null}`">
				<h1 class="text-shadow relative text-3xl lg:text-5xl leading-tight uppercase italic ml-4">
					{{ pageName }}
				</h1>
			</BaseHeading>

			<p class="opacity-50 text-sm">{{ block.subtitle }}</p>
		</div>
		<div class="mt-12" v-editable="block">
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
			pageName: {
				type: String,
				required: true,
			},
		},
	};
</script>
