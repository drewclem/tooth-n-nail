<script>
	import HeaderBG from '@/assets/svg/HeaderBG';
	import Eagle from '@/assets/svg/Eagle';
	import Swallow from '@/assets/svg/Swallow';
	import SkullRose from '@/assets/svg/SkullRose';
	import TwoDiamond from '@/assets/svg/TwoDiamond';
	import FaCarousel from '@/components/Home/FaCarousel';
	import InstagramIcon from '@/assets/svg/instagram-brands.svg?inline';
	import IconHeart from '@/assets/svg/icon-heart.svg?inline';
	import Heart from '@/assets/svg/Heart';
	import BannerHeading from '@/components/Base/BannerHeading';

	export default {
		name: 'Home',
		components: {
			HeaderBG,
			Eagle,
			Swallow,
			Heart,
			SkullRose,
			TwoDiamond,
			FaCarousel,
			IconHeart,
			InstagramIcon,
			BannerHeading,
		},
	};
</script>

<template>
	<div class="mt-10 md:mt-0 relative">
		<Swallow class="hidden md:block absolute text-yellow-200 left-0 top-0 ml-12 -mt-20 w-1/4" />
		<Eagle
			class="hidden md:block absolute text-yellow-200 right-0 w-1/3 transform rotate-25 mt-56"
		/>

		<section class="container mx-auto px-5 lg:px-0 md:py-6 -mt-6">
			<div class="items-center justify-around transform translate-x-12 hero-wrapper md:flex">
				<div class="relative flex justify-center mb-6 hero-img">
					<img src="~assets/images/tattoo.jpg" />
				</div>

				<div
					class="text-center uppercase hero-lockup font-display text-black-900 md:text-left md:ml-10 z-50"
				>
					<h1 class="text-shadow relative mb-5 text-4xl leading-tight lg:text-6xl font-bold">
						Creativity worth committing to
					</h1>

					<p
						class="mb-5 text-lg italic font-light tracking-widest opacity-75 lg:text-2xl"
						style="transform: rotate(2deg)"
					>
						Quality, Clean, &amp; Professional Tattooing.
					</p>

					<button class="btn"><nuxt-link to="/contact">Request Consultation</nuxt-link></button>
				</div>
			</div>
		</section>

		<section class="featured-artist relative mt-32 lg:mt-64 text-gray-200 bg-gray-200">
			<HeaderBG class="fa-bg absolute top-0 transform rotate-180 -mt-24" />

			<div class="px-5 xxl:px-0 pb-12 md:pb-0">
				<div class="container relative flex flex-col justify-between mx-auto text-black-900">
					<div class="mt-10 mb-12 italic uppercase">
						<div class="flex flex-row mb-3 lg:mb-6 text-4xl lg:text-5xl font-bold">
							<span class="-mt-1">
								<TwoDiamond class="w-6 lg:w-12 transform rotate-180 text-yellow-500" />
							</span>
							<h2>Featured Artist</h2>
						</div>

						<p class="text-2xl lg:text-3xl font-medium">Kevin dixon</p>

						<p class="text-base lg:text-lg opacity-75">Illustrative/Realism</p>
					</div>

					<div class="flex w-full mb-6">
						<FaCarousel />

						<div class="overflow-gradient -mr-px" />
					</div>

					<div class="hidden md:block absolute bottom-0 right-0 z-20">
						<img src="../assets/images/artists/kevin-cutout.png" class="w-full" />
					</div>
				</div>
			</div>
		</section>

		<section class="bg-yellow-500 pt-20 pb-32 relative">
			<div
				class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 text-black-900 px-5 xxl:px-0"
			>
				<article class="mb-12 md:mb-0">
					<IconHeart class="w-16 h-16 mb-4" />
					<h3 class="font-display font-bold mb-6 italic text-3xl">Sterile</h3>
					<p class="font-display font-light italic lg:w-3/4 opacity-75">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos</p
					>
				</article>
				<article class="mb-12 md:mb-0">
					<IconHeart class="w-16 h-16 mb-4" />
					<h3 class="font-display font-bold mb-6 italic text-3xl">Quality</h3>
					<p class="font-display font-light italic lg:w-3/4 opacity-75">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos</p
					>
				</article>
				<article class="mb-12 md:mb-0">
					<IconHeart class="w-16 h-16 mb-4" />
					<h3 class="font-display font-bold mb-6 italic text-3xl">Professional</h3>
					<p class="font-display font-light italic lg:w-3/4 opacity-75">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos</p
					>
				</article>
			</div>
			<HeaderBG class="absolute bottom-0 ys-bg -mb-24 text-yellow-500 z-0" />
		</section>

		<a
			href="/"
			class="flex flex-col md:flex-row justify-center items-center w-full ml-0 md:-ml-4 -mt-10 transform hover:scale-105 transition-transform ease-in-out group"
			style="transform: rotate(-3deg)"
		>
			<div class="w-32 h-32 bg-yellow-200 rounded-full p-6 mr-8 shadow-md group-hover:bg-black-900">
				<InstagramIcon class="w-full h-full group-hover:text-yellow-500" />
			</div>
			<h2 class="text-shadow font-display font-bold italic text-5xl uppercase leading-none"
				>Follow us on<br />Instragram!</h2
			>
		</a>

		<section class="relative overflow-hidden">
			<SkullRose
				class="hidden md:block absolute text-yellow-200 w-1/4 -rotate-25 transform ml-24 mt-64"
			/>

			<Heart
				class="hidden md:block absolute w-1/6 transform rotate-25 mt-20 mr-20 text-yellow-200 right-0"
			/>

			<Eagle
				class="hidden md:block absolute text-yellow-200 right-0 w-1/4 transform rotate-25 bottom-0  mr-24"
			/>

			<div class="max-w-3xl mx-auto md:grid grid-cols-2 gap-12 my-32 px-4">
				<h2 class="sr-only">Our Artists</h2>

				<div class="mb-6 md:mb-0">
					<BannerHeading link="/artists/kevin">Kevin Dixon</BannerHeading>

					<div class="pl-8 -mt-8 overflow-hidden" style="transform: rotate(1deg);">
						<img
							src="../assets/images/artists/kevin.jpg"
							alt=""
							style="height: 350px; width: 350px; object-fit: cover;"
						/>
					</div>
				</div>

				<div class="relative mb-6 md:mb-0">
					<BannerHeading link="/artists/kirby">Jonathan Kirby</BannerHeading>

					<div class="pl-8 -mt-8 overflow-hidden" style="transform: rotate(1deg);">
						<img
							src="../assets/images/artists/kirby.jpg"
							alt=""
							style="height: 350px; width: 350px; object-fit: cover;"
						/>
					</div>
				</div>

				<div class="mb-6 md:mb-0">
					<BannerHeading link="/artists/micah">Micah Freeman</BannerHeading>

					<div class="pl-8 -mt-8 overflow-hidden" style="transform: rotate(1deg);">
						<img
							src="../assets/images/artists/micah.jpeg"
							alt=""
							style="height: 350px; width: 350px; object-fit: cover;"
						/>
					</div>
				</div>

				<div class="mb-6 md:mb-0">
					<BannerHeading link="/artists/ricky">Ricky Lester</BannerHeading>

					<div class="pl-8 -mt-8 overflow-hidden" style="transform: rotate(1deg);">
						<img
							src="../assets/images/artists/ricky.jpeg"
							alt=""
							style="height: 350px; width: 350px; object-fit: cover;"
						/>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style lang="postcss" scoped>
	.hero-wrapper {
		transform: rotate(-3deg);
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
