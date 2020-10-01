<template>
	<div id="app">
		<TNHeader />
		<main class="mt-24">
			<Nuxt />
		</main>
	</div>
</template>

<script>
	import TNHeader from '@/components/Global/TNHeader';
	export default {
		components: {
			TNHeader,
		},
	};
</script>
