<template>
	<Swiper ref="carousel" :options="swiperOptions" class="swiper flex w-full">
		<SwiperSlide class="swiper-slide" :key="index" v-for="(img, index) in imgs">
			<img :src="img.path" :alt="img.title" />
		</SwiperSlide>
	</Swiper>
</template>

<script>
	import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
	import 'swiper/css/swiper.css';

	export default {
		components: {
			Swiper,
			SwiperSlide,
		},
		directives: {
			swiper: directive,
		},
		data: function() {
			return {
				imgs: [
					{
						title: 'Tattoo',
						path: '../../assets/images/artists/kevin/download (1).png',
					},
					{
						title: 'Tattoo',
						path: '../../assets/images/artists/kevin/download (2).png',
					},
					{
						title: 'Tattoo',
						path: '../../assets/images/artists/kevin/download (3).png',
					},
					{
						title: 'Tattoo',
						path: '../../assets/images/artists/kevin/download (4).png',
					},
					{
						title: 'Tattoo',
						path: '../../assets/images/artists/kevin/download (5).png',
					},
					{
						title: 'Tattoo',
						path: '../../assets/images/artists/kevin/download (6).png',
					},
					{
						title: 'Tattoo',
						path: '../../assets/images/artists/kevin/download (7).png',
					},
					{
						title: 'Tattoo',
						path: '../../assets/images/artists/kevin/download (8).png',
					},
				],
				swiperOptions: {
					slidesPerView: 1.25,
					keyboard: {
						enabled: true,
					},
					spaceBetween: 20,
					breakpoints: {
						720: {
							slidesPerView: 4,
						},
					},
				},
			};
		},
		computed: {
			swiper() {
				return this.$refs.carousel.$swiper;
			},
		},
	};
</script>

<style lang="postcss" scoped>
	@screen lg {
		.swiper-slide {
			height: 260px;
		}
	}
</style>
