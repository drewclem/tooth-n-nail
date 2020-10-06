<template>
	<div class="container mx-auto mt-10">
		<div class="items-center justify-around transform translate-x-12 hero-wrapper md:flex">
			<div class="relative flex justify-center mb-6 hero-img">
				<img src="~assets/images/tattoo.jpg" class="w-3/4 md:w-full" />
				<!-- <HeroImageFrame class="absolute top-0" /> -->
			</div>

			<div
				class="text-center uppercase hero-lockup font-display text-black-900 md:text-left md:ml-10"
			>
				<h1 class="mb-5 text-4xl leading-tight lg:text-6xl">Creativity worth committing to</h1>

				<p
					class="mb-5 text-lg italic font-light tracking-widest opacity-75 lg:text-2xl"
					style="transform: rotate(2deg)"
				>
					Quality, Clean, &amp; Professional Tattooing.
				</p>

				<button class="btn"><nuxt-link to="/contact">Book Appointment</nuxt-link></button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Home',
	};
</script>

<style lang="postcss" scoped>
	.hero-wrapper {
		transform: rotate(-3deg);
	}

	.hero-lockup h1 {
		text-shadow: 5px 5px 0px #f9ebd5;
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
