<template>
	<section class="relative container mx-auto px-5 lg:px-0 md:py-6 -mt-6">
		<Swallow class="hidden md:block absolute text-yellow-200 left-0 top-0 ml-12 -mt-20 w-1/4" />
		<Eagle
			class="hidden md:block absolute text-yellow-200 right-0 w-1/3 transform rotate-25 mt-56"
		/>
		<div class="items-center transform translate-x-12 hero-wrapper md:flex">
			<div class="relative flex justify-center mb-6 hero-img">
				<img
					:src="block.featuredImage.filename"
					alt="Tattoo of a Jason Vorhees caricature underwater"
					lazy
				/>
			</div>

			<div
				class="text-center uppercase font-display text-black-900 md:text-left md:ml-10 lg:ml-0 z-50"
			>
				<h1
					class="max-w-2xl text-shadow relative mb-5 text-4xl leading-tight lg:text-6xl font-bold"
				>
					{{ block.title }}
				</h1>

				<p
					class="mb-5 text-lg italic font-light tracking-widest opacity-75 lg:text-2xl"
					style="transform: rotate(2deg)"
				>
					{{ block.subtitle }}
				</p>

				<button class="btn">
					<nuxt-link :to="block.buttonPath">{{ block.buttonText }}</nuxt-link>
				</button>
			</div>
		</div>
	</section>
</template>

<script>
	import Eagle from '@/assets/svg/Eagle';
	import Swallow from '@/assets/svg/Swallow';

	export default {
		components: {
			Eagle,
			Swallow,
		},
		props: {
			block: {
				type: Object,
				required: true,
			},
		},
	};
</script>

<style lang="postcss" scoped>
	.hero-wrapper {
		transform: rotate(-3deg);
	}

	@screen lg {
		.hero-wrapper {
			transform: translateX(60px) rotate(-3deg);
		}
	}

	@screen xl {
		.hero-wrapper {
			transform: translateX(150px) rotate(-3deg);
		}
	}
</style>
