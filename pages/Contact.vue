<template>
	<div class="max-w-2xl mx-auto px-6 mb-8 lg:mb-20">
		<div class="mb-12">
			<BaseHeading class="ml-8 mb-4">
				<h1 class="text-shadow relative text-3xl lg:text-5xl leading-tight uppercase italic ml-4">
					Contact Us
				</h1>
			</BaseHeading>
			<p class="text-xs">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p
			>
		</div>

		<section class="mb-20">
			<form>
				<div class="flex flex-col mb-6">
					<label class="mb-2" for="name">
						Name
					</label>
					<input id="name" type="text" class="border border-black-900 p-2" />
				</div>

				<div class="flex flex-col mb-6">
					<label class="mb-2" for="email">
						Email
					</label>
					<input id="email" type="text" class="border border-black-900 p-2" />
				</div>

				<div class="flex flex-col mb-6">
					<label class="mb-2" for="message">
						Message
					</label>
					<textarea id="message" rows="8" class="border border-black-900 p-2" />
				</div>

				<button class="btn" type="submit">Submit</button>
			</form>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'Contact',
	};
</script>
