<template>
	<header class="relative top-0 w-full h-12 bg-black">
		<div class="container mx-auto px-5">
			<router-link to="/">
				<img src="~static/images/tnn_logo.jpg" class="absolute w-32 z-50" />
			</router-link>
		</div>

		<img src="~assets/svg/header-bg.svg" class="absolute fill-current mt-5" />
	</header>
</template>

<script>
	export default {
		name: 'TNHeader',
	};
</script>
