<template>
	<div id="app" class="overflow-hidden" style="height: 1200px">
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
