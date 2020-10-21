<template>
	<div class="mt-10">
		<div class="container mx-auto px-5 lg:px-0">
			<div class="items-center justify-around transform translate-x-12 hero-wrapper md:flex">
				<div class="relative flex justify-center mb-6 hero-img">
					<img src="~assets/images/tattoo.jpg" />
				</div>

				<div
					class="text-center uppercase hero-lockup font-display text-black-900 md:text-left md:ml-10"
				>
					<h1 class="relative mb-5 text-4xl leading-tight lg:text-6xl font-bold">
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

		<div class="featured-artist relative mt-32 lg:mt-64 text-gray-200 bg-gray-200">
			<HeaderBG class="fa-bg absolute top-0 transform rotate-180 -mt-24" />

			<div class="px-5 xxl:px-0 pb-12 md:pb-0">
				<div class="container relative flex flex-col justify-between mx-auto text-black-900">
					<div class="mt-10 mb-12 italic uppercase">
						<div class="flex flex-row mb-3 lg:mb-6 text-4xl lg:text-5xl font-bold">
							<span class="-mt-2">
								<TwoDiamond class="w-6 lg:w-12 transform rotate-180 text-yellow-500" />
							</span>
							<h2>Featured Artist</h2>
						</div>

						<p class="text-2xl lg:text-3xl font-medium">Johnny Cool Hat</p>

						<p class="text-base lg:text-lg opacity-75">Illustrative/Realism</p>
					</div>

					<div class="flex w-full mb-6">
						<FaCarousel />

						<div class="overflow-gradient -mr-px" />
					</div>

					<div class="hidden md:block absolute bottom-0 right-0 z-20 w-2/5 ">
						<img src="../assets/images/headshot.png" class="w-full" />
					</div>
				</div>
			</div>
		</div>

		<div class="bg-yellow-500 py-20 relative">
			<div
				class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 text-black-900 px-5 xxl:px-0"
			>
				<div>
					<h3 class="font-display font-bold mb-6 italic text-3xl">Sterile</h3>
					<p class="font-display font-light italic lg:w-3/4 opacity-75">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos</p
					>
				</div>
				<div>
					<h3 class="font-display font-bold mb-6 italic text-3xl">Quality</h3>
					<p class="font-display font-light italic lg:w-3/4 opacity-75">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos</p
					>
				</div>
				<div>
					<h3 class="font-display font-bold mb-6 italic text-3xl">Professional</h3>
					<p class="font-display font-light italic lg:w-3/4 opacity-75">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos</p
					>
				</div>
			</div>
			<HeaderBG class="absolute bottom-0 ys-bg -mb-24 text-yellow-500" />
		</div>

		<div class="h-64"></div>
	</div>
</template>

<script>
	import HeaderBG from '../assets/svg/HeaderBG';
	import TwoDiamond from '../assets/svg/TwoDiamond';
	import FaCarousel from '@/components/Home/FaCarousel';

	export default {
		name: 'Home',
		components: {
			HeaderBG,
			TwoDiamond,
			FaCarousel,
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

	.fa-bg,
	.ys-bg {
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

		.ys-bg {
			width: auto;
			margin-bottom: -9%;
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
		width: 15vw;
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

	@screen lg {
		.overflow-gradient {
			width: 50vw;
		}
	}
</style>
