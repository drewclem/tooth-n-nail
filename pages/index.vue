<script>
	import HeaderBG from '../assets/svg/HeaderBG';
	export default {
		name: 'Home',
		components: {
			HeaderBG,
		},
	};
</script>

<template>
	<div class="mt-10">
		<div class="container mx-auto ">
			<div class="items-center justify-around transform translate-x-12 hero-wrapper md:flex">
				<div class="relative flex justify-center mb-6 hero-img">
					<img src="~assets/images/tattoo.jpg" class="w-3/4 md:w-full" />
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

		<div class="relative mt-64 text-gray-200 bg-gray-200">
			<HeaderBG class="featured-artist-top-pattern" />

			<div class="container relative flex justify-between mx-auto text-black-900">
				<div class="w-3/5 mt-10 italic uppercase">
					<h2 class="mb-6 text-5xl font-bold">Featured Artist</h2>
					<p class="text-3xl font-medium">Johnny Cool Hat</p>
					<p class="text-lg opacity-75">Illustrative/Realism</p>
				</div>

				<div class="absolute bottom-0 flex w-full mt-12 mb-6">
					<div class="w-1/4 h-64 mr-4 bg-gray-500"></div>
					<div class="w-1/4 h-64 mr-4 bg-gray-500"></div>
					<div class="w-1/4 h-64 mr-4 bg-gray-500"></div>
				</div>

				<img src="../assets/images/headshot.png" class="z-50 w-2/5 -mt-56" />
			</div>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
	.hero-wrapper {
		transform: rotate(-3deg);
	}

	.hero-lockup h1 {
		text-shadow: 5px 5px 0px #f9ebd5;
	}

	.featured-artist-top-pattern {
		position: absolute;
		transform: translateY(-137px) rotate(180deg);
		z-index: -1;
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
