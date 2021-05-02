<script>
	import TNHeader from '@/components/Global/TNHeader';
	import TNFooter from '@/components/Global/TNFooter';

	export default {
		components: {
			TNHeader,
			TNFooter,
		},
	};
</script>

<template>
	<div id="app" class="overflow-x-hidden">
		<TNHeader />

		<main class="mt-24 md:mt-40">
			<Nuxt />
		</main>

		<TnFooter />
	</div>
</template>
