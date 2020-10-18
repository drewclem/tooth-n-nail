<template>
	<div id="app" class="overflow-x-hidden">
		<TNHeader />
		<main class="mt-24 md:mt-40">
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
