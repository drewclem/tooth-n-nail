<template>
	<div class="relative">
		<div
			class="relative container mx-auto md:grid grid-cols-2 gap-8 items-center z-10 px-6 md:px-0"
		>
			<div>
				<BannerHeading>{{ block.name }}</BannerHeading>
				<div class="items-center hidden text-sm social-icons lg:flex mt-3 mb-8">
					<a
						href="https://www.instagram.com/kevin_dtattoos"
						class="mr-4 transition duration-150 ease-in-out cursor-pointer"
					>
						<InstagramIcon class="w-8 text-yellow-500 mr-2" />
					</a>
				</div>

				<div class="text-black-900">
					<p class="text-xl italic opacity-50">{{ block.experiance }}</p>
					<p class="mb-8 text-3xl font-bold font-display italic">{{ block.style }}</p>
					<p class="opacity-75 md:w-3/4 leading-relaxed">
						{{ block.bio }}
						<span v-if="block.name === 'Kevin Dixon'">
							<a
								class="bg-yellow-500 text-white p-1"
								href="https://docs.google.com/forms/d/e/1FAIpQLSeAomw_DzPpgivj8C_zAItaCOQMb3i14sEhS6AQHsLC_mdNEQ/viewform"
								>WAITLIST&nbsp;REQUEST&nbsp;FORM</a
							><br />
							<span class="text-xs"
								>(please note, this form is for Kevin D Tattoos only and will not work if you are
								looking to get tattooed by another artist here at TNT Parlour )</span
							>
						</span>
					</p>
				</div>
			</div>

			<div class="relative mt-12 md:mt-0 z-50">
				<img :src="block.image.filename" :alt="block.image.alt" class="w-full" />
			</div>
		</div>

		<HeaderBG class="text-yellow-200 absolute bottom-0 transform rotate-180 mb-64 z-0" />
		<div class="absolute bottom-0 bg-yellow-200 h-64 w-full"></div>
	</div>
</template>

<script>
	import BannerHeading from '@/components/Base/BannerHeading';
	import InstagramIcon from '@/assets/svg/InstagramIcon';
	import HeaderBG from '@/assets/svg/HeaderBG';
	export default {
		components: {
			BannerHeading,
			InstagramIcon,
			HeaderBG,
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
