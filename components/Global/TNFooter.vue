<script>
	import LogoBlack from '@/assets/svg/logo_black.svg?inline';
	import FacebookIcon from '@/assets/svg/FacebookIcon';
	import InstagramIcon from '@/assets/svg/InstagramIcon';
	import PhoneIcon from '@/assets/svg/PhoneIcon';

	export default {
		name: 'TNFooter',
		components: {
			LogoBlack,
			FacebookIcon,
			InstagramIcon,
			PhoneIcon,
		},
	};
</script>

<template>
	<footer class="bg-gray-200 py-12 mt-24">
		<div class="container mx-auto flex justify-between items-center">
			<div>
				<nuxt-link to="/"> <LogoBlack class="z-50 w-32 lg:w-40 mb-4 -ml-4" /> </nuxt-link>

				<a
					class="mb-4 items-center text-xl mr-4 italic tracking-wide text-black-900 transition duration-150 ease-in-out cursor-pointer lg:flex  lg:mr-8 font-display"
					href="tel:478-257-6155"
				>
					<PhoneIcon class="w-4 mt-px mr-4 opacity-50" />
					478-257-6155
				</a>

				<address>
					<p>484 Cherry Street</p>
					<p>Macon, GA 31021</p>
				</address>
			</div>

			<div>
				<nav>
					<ul class="flex italic text-xl">
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
						<li>
							<nuxt-link
								to="/contact"
								class="px-4 transition duration-150 ease-in-out opacity-50 hover:opacity-100"
							>
								Contact
							</nuxt-link>
						</li>
					</ul>
				</nav>
				<div class="items-center text-sm social-icons lg:flex mt-4 justify-end">
					<a
						class="mr-4 transition duration-150 ease-in-out opacity-75 cursor-pointer hover:opacity-100"
					>
						<FacebookIcon class="w-3 text-black-900" />
					</a>

					<a
						class="mr-4 transition duration-150 ease-in-out opacity-75 cursor-pointer hover:opacity-100"
					>
						<InstagramIcon class="w-4 text-black-900" />
					</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang="postcss" scoped>
	nav .nuxt-link-active {
		@apply opacity-100;
	}
</style>
