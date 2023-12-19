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
		<HeaderBG class="absolute hidden mt-2 text-yellow-200 header-bg lg:block yellow-under" />
		<HeaderBG
			class="absolute transition duration-100 ease-in-out pointer-events-none header-bg text-black-900"
		/>

		<div
			class="relative flex items-center justify-between px-5 py-4 mx-auto lg:container bg-black-900 xxl:px-0 lg:py-2 z-1"
		>
			<nuxt-link to="/">
				<TNLogo class="z-50 w-20 lg:w-24" />
			</nuxt-link>

			<nav
				class="hidden italic font-medium text-yellow-200 uppercase desktop-nav lg:block font-display lg:text-lg lg:ml-16"
			>
				<ul class="flex">
					<li class="mr-4 lg:mr-8">
						<nuxt-link
							to="/artists"
							class="px-4 transition duration-150 ease-in-out opacity-50 hover:opacity-100"
						>
							Artists
						</nuxt-link>
					</li>
					<li class="mr-4 lg:mr-8">
						<nuxt-link
							to="/q&a"
							class="px-4 transition duration-150 ease-in-out opacity-50 hover:opacity-100"
						>
							Q&amp;A
						</nuxt-link>
					</li>
					<li class="mr-4 lg:mr-8">
						<nuxt-link
							to="/aftercare"
							class="px-4 transition duration-150 ease-in-out opacity-50 hover:opacity-100"
						>
							Aftercare
						</nuxt-link>
					</li>
					<!-- <li>
						<nuxt-link
							to="/contact"
							class="px-4 transition duration-150 ease-in-out opacity-50 hover:opacity-100"
						>
							Contact
						</nuxt-link>
					</li> -->
				</ul>
			</nav>

			<div class="items-center hidden text-sm social-icons lg:flex">
				<a
					class="items-center hidden mr-4 italic tracking-wide text-yellow-200 transition duration-150 ease-in-out opacity-50 cursor-pointer lg:flex hover:opacity-100 lg:mr-8 font-display"
					href="tel:478-259-1829"
				>
					<PhoneIcon class="w-3 mt-px mr-2 opacity-50" />
					478-259-1829
				</a>

				<!-- <a
					class="mr-4 transition duration-150 ease-in-out opacity-75 cursor-pointer hover:opacity-100"
				>
					<FacebookIcon class="w-3 text-yellow-200" />
				</a> -->

				<a
					class="mr-4 transition duration-150 ease-in-out opacity-75 cursor-pointer hover:opacity-100"
					href="https://www.instagram.com/tntparlour/"
				>
					<InstagramIcon class="w-4 text-yellow-200" />
				</a>
			</div>
			<!--Desktop nav ends here-->

			<div class="lg:hidden">
				<button class="w-10 py-1" @click.prevent="toggleMobileMenu">
					<MobileMenuIcon class="w-full h-full text-yellow-500" :nav-open="navOpen" />
				</button>
			</div>
		</div>

		<nav
			class="absolute block w-full pt-12 pb-4 text-lg italic font-medium text-yellow-200 uppercase transition duration-300 ease-in-out bg-yellow-200 mobile-nav lg:hidden font-display"
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
					<a href="tel:478-259-1829">Contact Us</a>
				</li>
			</ul>

			<HeaderBG
				class="absolute mt-2 text-yellow-200 yellow-under"
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
