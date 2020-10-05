<script>
	import HeaderBG from '@/assets/svg/HeaderBG';
	import TNLogo from '@/assets/svg/TNLogo';
	import FacebookIcon from '@/assets/svg/FacebookIcon';
	import InstagramIcon from '@/assets/svg/InstagramIcon';
	import PhoneIcon from '@/assets/svg/PhoneIcon';
	import MobileMenuIcon from '@/assets/svg/MobileMenuIcon';

	export default {
		name: 'TNHeader',
		components: {
			HeaderBG,
			TNLogo,
			FacebookIcon,
			InstagramIcon,
			PhoneIcon,
			MobileMenuIcon,
		},
		data() {
			return {
				navOpen: false,
			};
		},
		watch: {
			$route() {
				this.navOpen = false;
			},
		},
		computed: {
			svgFilter() {
				let filter = 'filter';
				if (this.navOpen) {
					filter = 'filter-active';
				}
				return filter;
			},
		},
		methods: {
			toggleMobileMenu() {
				this.navOpen = !this.navOpen;
			},
		},
	};
</script>

<template>
	<header class="relative top-0 w-full bg-black-900">
		<HeaderBG class="header-bg hidden lg:block yellow-under mt-2 absolute text-yellow-200" />
		<HeaderBG
			class="header-bg absolute text-black-900 pointer-events-none transition duration-100 ease-in-out"
		/>

		<div
			class="lg:container bg-black-900 relative mx-auto px-5 xxl:px-0 py-4 lg:py-2 flex items-center justify-between z-1"
		>
			<nuxt-link to="/">
				<TNLogo class="w-20 lg:w-24 z-50" />
			</nuxt-link>

			<nav
				class="desktop-nav hidden lg:block text-yellow-200 font-display uppercase font-medium italic lg:text-lg lg:ml-16"
			>
				<ul class="flex">
					<li class="mr-4 lg:mr-8">
						<nuxt-link
							to="/artists"
							class="opacity-50 hover:opacity-100 transition duration-150 ease-in-out px-4"
							>Artists</nuxt-link
						>
					</li>
					<li class="mr-4 lg:mr-8">
						<nuxt-link
							to="/q&a"
							class="opacity-50 hover:opacity-100 transition duration-150 ease-in-out px-4"
							>Q&amp;A</nuxt-link
						>
					</li>
					<li class="mr-4 lg:mr-8">
						<nuxt-link
							to="/aftercare"
							class="opacity-50 hover:opacity-100 transition duration-150 ease-in-out px-4"
							>Aftercare</nuxt-link
						>
					</li>
					<li>
						<nuxt-link
							to="/contact"
							class="opacity-50 hover:opacity-100 transition duration-150 ease-in-out px-4"
							>Contact</nuxt-link
						>
					</li>
				</ul>
			</nav>

			<div class="social-icons text-sm hidden lg:flex items-center">
				<a
					class="hidden lg:flex items-center text-yellow-200 opacity-50 hover:opacity-100 mr-4 lg:mr-8 font-display italic tracking-wide cursor-pointer transition duration-150 ease-in-out"
					href="tel:478-257-6155"
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
			<!--Desktop nav ends here-->

			<div class="lg:hidden">
				<button class="w-10 py-1" @click.prevent="toggleMobileMenu">
					<MobileMenuIcon class="text-yellow-500 w-full h-full" :nav-open="navOpen" />
				</button>
			</div>
		</div>

		<nav
			class="mobile-nav absolute w-full block lg:hidden text-yellow-200 font-display uppercase font-medium italic text-lg pt-12 pb-4 bg-yellow-200 transition ease-in-out duration-300"
			:class="navOpen ? 'active' : ''"
		>
			<ul class="flex flex-col text-center text-black-900">
				<li class="mb-4">
					<nuxt-link class="px-6 py-2" to="/artists">Artists</nuxt-link>
				</li>
				<li class="mb-4">
					<nuxt-link class="px-6 py-2" to="/q&a">Q&amp;A</nuxt-link>
				</li>
				<li class="mb-4">
					<nuxt-link class="px-6 py-2" to="/aftercare">Aftercare</nuxt-link>
				</li>
				<li>
					<nuxt-link class="px-6 py-2" to="/contact">Contact</nuxt-link>
				</li>
			</ul>

			<HeaderBG
				class="yellow-under mt-2 absolute text-yellow-200"
				style="width: 1200px; transform: translateX(-80px);"
			/>
		</nav>
	</header>
</template>

<style lang="postcss" scoped>
	header {
		height: 50px;
		z-index: 99999;
	}

	.header-bg {
		top: 49px;
		width: 1200px;

		&.active {
			transform: translateY(300px);
		}
	}

	.mobile-nav {
		transform: translateY(-220px);
		z-index: -1;

		&.active {
			transform: translateY(0);
		}
	}

	nav .nuxt-link-active {
		background-image: url(~assets/svg/single-diamond.svg);
		background-repeat: no-repeat;
		opacity: 1;
	}

	button {
		outline: none;
	}

	@screen lg {
		header {
			heigth: 40px;
		}
		.header-bg {
			top: 39px;
			width: auto;
		}
	}
</style>
