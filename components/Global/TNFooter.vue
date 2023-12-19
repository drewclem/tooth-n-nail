<script>
	import TNLogo from '@/assets/svg/TNLogo';
	import FacebookIcon from '@/assets/svg/FacebookIcon';
	import InstagramIcon from '@/assets/svg/InstagramIcon';
	import PhoneIcon from '@/assets/svg/PhoneIcon';

	export default {
		name: 'TNFooter',
		components: {
			TNLogo,
			FacebookIcon,
			InstagramIcon,
			PhoneIcon,
		},
	};
</script>

<template>
	<footer class="bg-black-900 text-white py-12 mt-12 lg:mt-24">
		<div class="container mx-auto lg:flex justify-between items-center">
			<div class="flex flex-col items-center lg:items-start">
				<nuxt-link to="/">
					<TNLogo class="z-50 w-48 mb-8 lg:mb-4 lg:-ml-4" />
				</nuxt-link>

				<div class="text-center lg:text-left">
					<a
						class=" mb-4 items-center text-xl italic tracking-wide transition duration-150 ease-in-out cursor-pointer lg:flex font-display"
						href="tel:478-259-1829"
					>
						<PhoneIcon class="w-4 mt-px mr-4 opacity-50 inline-block" />
						478-259-1829
					</a>

					<address class="mt-4">
						<p>484 Cherry Street</p>
						<p>Macon, GA 31021</p>
					</address>
				</div>
			</div>

			<div class="px-4">
				<nav class="hidden lg:block">
					<ul class="flex italic text-xl justify-end">
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
						<li>
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
				<div class="items-center text-sm social-icons lg:flex mt-4 justify-end hidden md:block">
					<!-- <a
						class="mr-4 transition duration-150 ease-in-out opacity-75 cursor-pointer hover:opacity-100"
					>
						<FacebookIcon class="w-3 text-black-900" />
					</a> -->

					<a
						class="flex mr-4 transition duration-150 ease-in-out opacity-75 cursor-pointer hover:opacity-100"
						href="https://www.instagram.com/tntparlour/"
					>
						<InstagramIcon class="w-4 text-yellow-500 mr-2" /> Follow us on Instagram!
					</a>
				</div>
				<p class="mt-8 pr-4 opacity-50 text-center md:text-right"
					>Licensed by the Macon Bibb County Board of Health. 171 Emory Highway.
					<a class="underline" href="tel:478-745-0411">478-745-0411</a>
				</p>
			</div>
		</div>
	</footer>
</template>

<style lang="postcss" scoped>
	nav .nuxt-link-active {
		@apply opacity-100;
	}
</style>
