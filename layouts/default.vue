<template>
	<div id="app" class="overflow-x-hidden">
		<TNHeader />

		<main class="mt-20 md:mt-32">
			<Nuxt />
		</main>

		<TnFooter />
	</div>
</template>

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
