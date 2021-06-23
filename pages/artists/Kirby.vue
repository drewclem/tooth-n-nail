<script>
	import BannerHeading from '@/components/Base/BannerHeading';
	import FacebookIcon from '@/assets/svg/FacebookIcon';
	import InstagramIcon from '@/assets/svg/InstagramIcon';
	import HeaderBG from '@/assets/svg/HeaderBG';
	import Heart from '@/assets/svg/Heart';
	import Eagle from '@/assets/svg/Eagle';

	export default {
		components: {
			BannerHeading,
			FacebookIcon,
			InstagramIcon,
			HeaderBG,
			Heart,
			Eagle,
		},
	};
</script>

<template>
	<div>
		<section>
			<div class="container mx-auto px-6 md:px-0 overflow-hidden">
				<Eagle
					class="absolute w-1/2 md:w-1/3 md:mt-32 md:mr-12 transform rotate-25 text-yellow-200 right-0 z-0"
				/>
				<Heart
					class="text-yellow-200 absolute w-1/3  ml-8 mt-48 md:w-1/5 md:ml-64 md:-mt-24 transform -rotate-25 left-0 z-0"
				/>

				<div class="md:grid grid-cols-2 gap-8 items-center">
					<div>
						<BannerHeading>Jonathan Kirby</BannerHeading>
						<div class="items-center hidden text-sm social-icons lg:flex mt-3 mb-8">
							<a class="mr-4 transition duration-150 ease-in-out cursor-pointer">
								<FacebookIcon class="w-4 text-yellow-500" />
							</a>

							<a class="mr-4 transition duration-150 ease-in-out cursor-pointer">
								<InstagramIcon class="w-5 text-yellow-500" />
							</a>
						</div>

						<div class="text-black-900">
							<p class="text-xl italic opacity-50">4 Years Experience</p>
							<p class="mb-8 text-3xl font-bold font-display italic">Traditional/Neo-Traditional</p>
							<p class="opacity-75 md:w-3/4"
								>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum exercitationem
								libero, necessitatibus ex quibusdam odio ad. Illo distinctio culpa odio quos dicta
								dolorem, dolorum deserunt laudantium error numquam, perferendis natus.</p
							>
						</div>
					</div>

					<div class="relative mt-12 md:m-0">
						<img src="../../assets/images/artists/kirby-cutout.png" class="w-full" />
					</div>
				</div>

				<div class="grid grid-cols-2 md:grid-cols-3 gap-8 my-24">
					<div class="bg-gray-600 h-64" />
					<div class="bg-gray-600 h-64" />
					<div class="bg-gray-600 h-64" />
					<div class="bg-gray-600 h-64" />
					<div class="bg-gray-600 h-64" />
					<div class="bg-gray-600 h-64" />
				</div>
			</div>
		</section>
	</div>
</template>
