<template>
	<div class="max-w-2xl mx-auto px-6">
		<BaseHeading class="ml-8 mb-12">
			<h1 class="text-shadow relative text-3xl lg:text-5xl leading-tight uppercase italic ml-4">
				Q&amp;A
			</h1>
		</BaseHeading>

		<section>
			<ul>
				<li class="question">
					<h2>Does getting a tattoo or piercing hurt?</h2>
					<div>
						<p class="mb-4"
							>Yes, there is a certain level of pain with any tattoo or piercing procedure but all
							of our artist are highly knowledgeable on which areas hurt more or less than others
							and can help you understand the level of pain to expect for your specific tattoo and
							or piercing.</p
						><p>
							Our number one goal is to give you the best tattoo or piercing experience possible and
							we feel that helping you anticipate and understand the level of pain you may endure is
							a vital aspect of achieving.
						</p>
					</div>
				</li>

				<li class="question">
					<h2>Can I go swimming with a new tattoo?</h2>
					<div
						>No, you cannot. The healing phase of a tattoo (or piercing) is a delicate and crucial
						time for your new tattoo and is just as important as choosing the right artist. During
						the healing process you need to keep your tattoo at that perfect balance of
						dry/moisturized for it to heal properly. If your tattoo gets to dry then it could cause
						issues for the healing process and if it stays too wet the chance of developing an
						infection are significantly higher than normal. We HIGHLY HIGHLY suggest ABSOLUTELY NO
						SWIMMING for at least 3 weeks after receiving your tattoo. So if you have an upcoming
						vacation please consult with your artist about the best time to schedule your
						appointment. If you want that cute tattoo for PCB and your trip is next week then you
						have two options:
						<ul class="my-4"
							><li>1. No swimming while you're there or</li
							><li>
								2. Waiting til you get back to get your tattoo. It'll still be there next
								summer!</li
							></ul
						>
						Please see our
						<nuxt-link
							to="/aftercare"
							class="underline bg-yellow-500 text-black-900 p-1 opacity-100"
							>Aftercare</nuxt-link
						>
						page to learn how to clean and properly care for your tattoo during the healing process.
					</div>
				</li>

				<li class="question">
					<h2>How much does (X) cost?</h2>
					<div>
						<p class="mb-4"
							>There are a lot of variables in play when it comes to getting a tattoo. Things like
							where you want your tattoo placed, how big you want it, the type of tattoo you're
							getting (traditional, reaslism, tribal, etc..) all play a huge role in the length it
							will take to complete your tattoo as well as the cost that goes along with it. Because
							of this we will not quote prices over the phone or social media.</p
						>

						<p
							>Your artist will quote a price for your specific needs after they have consulted with
							you about your tattoo.</p
						>
					</div>
				</li>

				<li class="question">
					<h2>Why is my ink leaking out?</h2>
					<div>
						<p class="mb-4"
							>The short answer is... it isn't. During the healing the phase your body produces
							plasma and fluids to heal your skin from the procedure of receiving a tattoo. These
							fluids may be slightly tinted from the ink of your tattoo but your tattoo isn't going
							to fade and your body isn't rejecting the ink. It is a very normal part of the process
							and it happens to literally everyone who has gotten a tattoo.</p
						>

						<p>
							Please see our
							<nuxt-link
								to="/aftercare"
								class="underline bg-yellow-500 text-black-900 p-1 opacity-100"
								>Aftercare</nuxt-link
							>
							page to learn how to clean and properly care for your tattoo during the healing
							process.</p
						>
					</div>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'Q&A',
	};
</script>

<style lang="postcss" scoped>
	section ul .question {
		@apply mb-8;
	}

	h2 {
		@apply font-display text-3xl font-medium mb-5 italic;
	}

	li div {
		@apply text-gray-700 leading-relaxed text-lg italic;
	}
</style>
