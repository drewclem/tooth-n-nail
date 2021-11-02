<template>
	<Swiper ref="carousel" :options="swiperOptions" class="swiper flex w-full">
		<SwiperSlide class="swiper-slide" :key="index" v-for="(img, index) in imgs">
			<img class="w-full h-full object-cover" :src="img.image.filename" :alt="img.image.alt" />
		</SwiperSlide>
		<SwiperSlide class="swiper-slide"> </SwiperSlide>
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
		props: {
			imgs: {
				type: Array,
				required: true,
			},
		},
		data: function() {
			return {
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
