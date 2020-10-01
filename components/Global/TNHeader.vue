<template>
	<header class="relative top-0 w-full bg-black-900">
		<div class="container relative mx-auto px-5 lg:px-0 py-2 flex items-center justify-between z-1">
			<nuxt-link to="/">
				<TNLogo class="w-24 z-50" />
			</nuxt-link>

			<nav class="text-yellow-200 font-display uppercase font-medium italic text-lg ml-12">
				<ul class="flex">
					<li class="mr-16">
						<nuxt-link
							to="/artists"
							class="opacity-50 hover:opacity-100 transition duration-150 ease-in-out px-4"
							>Artists</nuxt-link
						>
					</li>
					<li class="mr-16">
						<nuxt-link
							to="/q&a"
							class="opacity-50 hover:opacity-100 transition duration-150 ease-in-out px-4"
							>Q&amp;A</nuxt-link
						>
					</li>
					<li class="mr-16">
						<nuxt-link
							to="/aftercare"
							class="opacity-50 hover:opacity-100 transition duration-150 ease-in-out px-4"
							>Aftercare</nuxt-link
						>
					</li>
					<li class="">
						<nuxt-link
							to="/contact"
							class="opacity-50 hover:opacity-100 transition duration-150 ease-in-out px-4"
							>Contact</nuxt-link
						>
					</li>
				</ul>
			</nav>

			<div class="social-icons text-sm flex items-center">
				<a
					class="flex items-center text-yellow-200 opacity-50 hover:opacity-100 mr-8 font-display italic tracking-wide cursor-pointer transition duration-150 ease-in-out"
				>
					<PhoneIcon class="w-3 mr-2 opacity-50 mt-px" />
					478-257-6155
				</a>

				<a
					class="opacity-75 hover:opacity-100 transition duration-150 ease-in-out mr-4 cursor-pointer"
				>
					<FacebookIcon class="w-3 text-yellow-200" />
				</a>

				<a
					class="opacity-75 hover:opacity-100 transition duration-150 ease-in-out mr-4 cursor-pointer"
				>
					<InstagramIcon class="w-4 text-yellow-200" />
				</a>
			</div>
		</div>

		<HeaderBG class="header-bg mt-2 absolute text-yellow-200" />
		<HeaderBG class="header-bg absolute text-black-900" />
	</header>
</template>

<script>
	import HeaderBG from '@/assets/svg/HeaderBG';
	import TNLogo from '@/assets/svg/TNLogo';
	import FacebookIcon from '@/assets/svg/FacebookIcon';
	import InstagramIcon from '@/assets/svg/InstagramIcon';
	import PhoneIcon from '@/assets/svg/PhoneIcon';

	export default {
		name: 'TNHeader',
		components: {
			HeaderBG,
			TNLogo,
			FacebookIcon,
			InstagramIcon,
			PhoneIcon,
		},
	};
</script>

<style scoped>
	header {
		height: 40px;
	}

	.header-bg {
		top: 40px;
		z-index: -1;
	}

	.nuxt-link-active {
		background-image: url(~assets/svg/single-diamond.svg);
		background-repeat: no-repeat;
		opacity: 1;
	}
</style>
