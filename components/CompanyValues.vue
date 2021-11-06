<template>
	<div>
		<section class="bg-yellow-500 pt-20 pb-32 relative">
			<div
				class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 text-black-900 px-5 xxl:px-0"
			>
				<article :key="value._uid" v-for="value in block.values" class="mb-12 md:mb-0">
					<div class="w-16 h-16 mb-4">
						<img :src="value.icon.filename" class="w-full" alt="" />
					</div>

					<h3 class="font-display font-bold mb-6 italic text-3xl">{{ value.title }}</h3>
					<p class="font-display font-light italic lg:w-3/4 opacity-75">{{ value.description }} </p>
				</article>
			</div>
			<HeaderBG class="absolute bottom-0 ys-bg -mb-24 text-yellow-500 z-0" />
		</section>

		<a
			:href="block.instagramLink"
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
	</div>
</template>

<script>
	import HeaderBG from '@/assets/svg/HeaderBG';
	import InstagramIcon from '@/assets/svg/InstagramIcon';
	export default {
		components: {
			HeaderBG,
			InstagramIcon,
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
	.ys-bg {
		width: 1200px;
	}

	@screen xl {
		.ys-bg {
			width: auto;
			margin-bottom: -9%;
		}
	}
</style>
