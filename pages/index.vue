<template>
	<div class="mt-10">
		<div class="container mx-auto px-5 lg:px-0">
			<div class="items-center justify-around transform translate-x-12 hero-wrapper md:flex">
				<div class="relative flex justify-center mb-6 hero-img">
					<img src="~assets/images/tattoo.jpg" class="w-3/4 md:w-full" />
				</div>

				<div
					class="text-center uppercase hero-lockup font-display text-black-900 md:text-left md:ml-10"
				>
					<h1 class="relative mb-5 text-4xl leading-tight lg:text-6xl">
						Creativity worth committing to
					</h1>

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

		<div class="featured-artist relative mt-64 text-gray-200 bg-gray-200">
			<HeaderBG class="fa-bg absolute top-0 transform rotate-180 -mt-24" />

			<div class="px-5 lg:px-0">
				<div class="container relative flex flex-col justify-between mx-auto text-black-900">
					<div class="mt-10 mb-6 lg:mb-12 italic uppercase">
						<h2 class="flex mb-3 lg:mb-6 text-3xl lg:text-5xl font-bold">
							<TwoDiamond class="w-8 lg:w-12 transform rotate-180 -mt-2" />
							Featured Artist
						</h2>

						<p class="text-lg lg:text-3xl font-medium">Johnny Cool Hat</p>

						<p class="text-base lg:text-lg opacity-75">Illustrative/Realism</p>
					</div>

					<div class="flex w-full mb-6">
						<div class="w-1/4 h-64 mr-4 bg-gray-500"></div>
						<div class="w-1/4 h-64 mr-4 bg-gray-500"></div>
						<div class="w-1/4 h-64 mr-4 bg-gray-500"></div>

						<div class="overflow-gradient lg:mr-64" />
					</div>

					<div class="absolute bottom-0 right-0 z-20 w-2/5">
						<img src="../assets/images/headshot.png" class="w-full" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import HeaderBG from '../assets/svg/HeaderBG';
	import TwoDiamond from '../assets/svg/TwoDiamond';

	export default {
		name: 'Home',
		components: {
			HeaderBG,
			TwoDiamond,
		},
	};
</script>

<style lang="postcss" scoped>
	.hero-wrapper {
		transform: rotate(-3deg);
	}

	.hero-lockup h1 {
		text-shadow: 5px 5px 0px #f9ebd5;
	}

	.fa-bg {
		width: 1200px;
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

		.fa-bg {
			width: auto;
			margin-top: -9%;
		}
	}

	.overflow-gradient {
		position: absolute;
		pointer-events: none;
		top: 0;
		right: 0;
		height: 100%;
		width: 25vw;
		z-index: 1;

		/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&0+0,1+100 */
		background: -moz-linear-gradient(
			left,
			rgba(255, 255, 255, 0) 0%,
			rgba(237, 242, 247, 1) 100%
		); /* FF3.6-15 */
		background: -webkit-linear-gradient(
			left,
			rgba(255, 255, 255, 0) 0%,
			rgba(237, 242, 247, 1) 100%
		); /* Chrome10-25,Safari5.1-6 */
		background: linear-gradient(
			to right,
			rgba(255, 255, 255, 0) 0%,
			rgba(237, 242, 247, 1) 100%
		); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		filter: progid:DXImageTransform.Microsoft.gradient(
    startColorstr='#00ffffff',
    endColorstr='#ffffff',
    GradientType=1
  ); /* IE6-9 */
	}
</style>
