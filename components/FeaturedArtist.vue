<template>
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

					<p class="text-2xl lg:text-3xl font-medium">{{ block.name }}</p>

					<p class="text-base lg:text-lg opacity-75">{{ block.specialty }}</p>
				</div>

				<div class="flex w-full mb-6">
					<FaCarousel :imgs="block.images" />

					<div class="overflow-gradient -mr-px" />
				</div>

				<div
					v-if="block.cutoutImage.filename"
					class="hidden md:block absolute bottom-0 right-0 z-20"
				>
					<img :src="block.cutoutImage.filename" class="w-full" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import HeaderBG from '@/assets/svg/HeaderBG';
	import TwoDiamond from '@/assets/svg/TwoDiamond';
	import FaCarousel from '@/components/Home/FaCarousel';

	export default {
		components: {
			HeaderBG,
			TwoDiamond,
			FaCarousel,
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
</style>
