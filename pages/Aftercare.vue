<script>
	import BaseHeading from '@/components/Base/BaseHeading';

	export default {
		name: 'Aftercare',
		components: {
			BaseHeading,
		},
	};
</script>

<template>
	<div class="max-w-2xl mx-auto px-6">
		<BaseHeading class="ml-8 mb-12">
			<h1 class="text-shadow relative text-3xl lg:text-5xl leading-tight uppercase italic ml-4">
				Tattoo Aftercare
			</h1>
		</BaseHeading>

		<section class="ml-4">
			<ol>
				<li>Remove the bandage after one to two hours.</li>
				<li>
					Wash the tattoo using a mild antibacterial soap (such as Dial or Dial foam) and warm
					water.( Long showers or baths must be avoided for 2 weeks. This includes swimming in the
					Ocean or a Pool, Hot Tubs, and Saunas).
				</li>
				<li>
					Remove all traces of blood and plasma.
				</li>
				<li>
					Do not scrub the tattoo with a washcloth during the two week healing period. Pat it dry
					with a clean, soft cloth or paper towel.
				</li>
				<li>
					Once dry, apply a very thin coat of ointment to the tattoo. We recommend using Aquaphor as
					ointment. Only use enough to make it shine, a little goes a long way.
				</li>
				<li>Do not re-bandage the tattoo.</li>
				<li
					>Repeat the cycle of washing, drying, and applying ointment to the tattoo about 3-4 times
					per day for the first 4-5 days.</li
				>
				<li
					>After, (as long as there is no scabbing) switch to a regular unscented moisturizer such
					as Eucerin, Lubriderm, Curel, Corn huskers, or Jergens.</li
				>
				<li
					>Apply moisturizer twice a day for the remainder of two weeks. Do not use lotions that
					contain dyes or fragrance.</li
				>
				<li
					>Do not peel your tattoo, you will pull the ink out. It is perfectly normal to see small
					flakes of colored skin falling off during this stage of healing.</li
				>
				<li>Please refrain from scratching or picking at the tattoo.</li>
				<li
					>The sun is BAD for your tattoo. It will dry out your tattoo and could cause it to form a
					horrendous scab resulting in fading before it is even healed.</li
				>
				<li
					>Follow these instructions and consult with your artist about any further
					instructions.</li
				>
				<li
					>Never ask you neighbor, bae, or your cousin's friend how to take care of your tattoo.</li
				>
			</ol>
		</section>
	</div>
</template>

<style lang="postcss" scoped>
	ol {
		counter-reset: li;
	}
	ol li {
		@apply text-xl italic leading-relaxed mb-6;
		counter-increment: li;
	}

	ol li::before {
		content: counter(li);
		display: inline-block;
		margin-left: -1.5em;
		margin-right: 0.5em;
		text-align: right;
		width: 1em;
		direction: rtl;
		@apply text-2xl font-display font-bold opacity-100;
	}
</style>
