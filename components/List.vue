<template>
	<section class="ml-4 mb-20">
		<h2 class="-ml-4 text-2xl font-bold italic mb-4">{{ block.title }}</h2>
		<ol>
			<li :key="item._uid" v-for="item in block.listItems">{{ item.text }}</li>
		</ol>
	</section>
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
	ol {
		counter-reset: li;
	}
	ol li {
		@apply italic mb-6;
		counter-increment: li;
	}

	ol li::before {
		content: counter(li);
		display: inline-block;
		margin-left: -1.5em;
		margin-right: 0.5em;
		text-align: right;
		width: 1em;
		direction: rtl;
		@apply text-2xl font-display font-bold opacity-100;
	}
</style>
