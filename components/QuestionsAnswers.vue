<template>
	<ul>
		<li :key="item._uid" v-for="item in block.questionAnswer" class="question">
			<h2>{{ item.Question }}</h2>
			<div>
				<p class="mb-4">{{ item.Answer }}</p>
			</div>
		</li>
	</ul>
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

<style lang="postcss" scoped>
	section ul .question {
		@apply mb-8;
	}

	h2 {
		@apply font-display text-3xl font-medium mb-5 italic;
	}

	li div {
		@apply text-gray-700 leading-relaxed text-lg italic;
	}
</style>
