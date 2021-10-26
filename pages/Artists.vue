<template>
	<div class="relative max-w-4xl mx-auto px-6">
		<SkullRose
			class="hidden md:block absolute text-yellow-200 w-1/2 -rotate-25 transform -ml-56 mt-40"
		/>

		<Heart
			class="hidden md:block absolute w-1/3 transform rotate-25 text-yellow-200 right-0 -mr-32"
		/>

		<Eagle
			class="hidden md:block absolute text-yellow-200 right-0 w-2/3 transform rotate-25 bottom-0 -mr-64 mt-24"
		/>
		<BaseHeading class="ml-8 mb-12">
			<h1 class="text-shadow relative text-3xl lg:text-5xl leading-tight uppercase italic ml-4">
				Our Artists
			</h1>
		</BaseHeading>

		<section>
			<div class="max-w-6xl mx-auto md:grid grid-cols-2 gap-16 row-gap-32 my-32 px-4">
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

<script>
	import Eagle from '@/assets/svg/Eagle';
	import Heart from '@/assets/svg/Heart';
	import SkullRose from '@/assets/svg/SkullRose';
	export default {
		name: 'Artists',
		components: {
			Eagle,
			Heart,
			SkullRose,
		},
	};
</script>

<style lang="scss" scoped></style>
