<template>
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

		<div class="max-w-3xl justify-center grid md:grid-cols-2 gap-12 mt-32 px-4">
			<h2 class="sr-only">Our Artists</h2>

			<div :key="artist._uid" v-for="artist in block.artists" class="mb-6 md:mb-0">
				<BannerHeading :link="artist.link.cached_url">{{ artist.name }}</BannerHeading>

				<div class="pl-8 -mt-8 overflow-hidden" style="transform: rotate(1deg);">
					<img
						:src="artist.image.filename"
						:alt="artist.image.alt"
						style="height: 350px; width: 350px; object-fit: cover;"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import SkullRose from '@/assets/svg/SkullRose';
	import Heart from '@/assets/svg/Heart';
	import Eagle from '@/assets/svg/Eagle';
	import BannerHeading from '@/components/Base/BannerHeading';
	export default {
		components: {
			SkullRose,
			Heart,
			Eagle,
			BannerHeading,
		},
		props: {
			block: {
				type: Object,
				required: true,
			},
		},
	};
</script>

<style lang="postcss" scoped></style>
