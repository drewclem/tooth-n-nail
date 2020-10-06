<template>
	<div id="app" class="overflow-hidden" style="height: 1200px">
		<TNHeader />
		<main class="px-5 mt-24 lg:px-0 md:mt-40">
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
