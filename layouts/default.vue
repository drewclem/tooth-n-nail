<template>
	<div id="app">
		<TNHeader />
		<main class="px-5 lg:px-0 mt-12 lg:mt-24">
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
