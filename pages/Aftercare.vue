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
	<div class="max-w-2xl mx-auto px-6 mb-8 lg:mb-20">
		<div class="mb-12">
			<BaseHeading class="ml-8 mb-4">
				<h1 class="text-shadow relative text-3xl lg:text-5xl leading-tight uppercase italic ml-4">
					Tattoo Aftercare
				</h1>
			</BaseHeading>

			<p class="opacity-50 text-sm"
				>Licensed by the Macon Bibb County Board of Health. 171 Emory Highway.
				<a class="underline" href="tel:478-745-0411">478-745-0411</a></p
			>
		</div>

		<section class="ml-4 mb-20">
			<h2 class="-ml-4 text-2xl font-bold italic mb-4"
				>Taking care of your tattoo if you were wrapped with Soku Tattoo Aftercare:</h2
			>
			<ol>
				<li>
					Leave Soku Tattoo Aftercare on the tattoo for at least 3 days after your tattoo
					appointment.(you can leave the wrap on for up to a week if it isn’t causing you any issues
					or irritation).
				</li>
				<li>
					During the 3 days, your tattoo will produce a dark, cloudy liquid under the bandage. This
					liquid is a mixture of blood, plasma, and excess ink. There’s no reason to be alarmed, the
					liquid produced by your tattoo is very good for the healing of the piece and will help it
					to heal faster.
				</li>
				<li>
					After at least 3 days, slowly take the bandage off in the shower with Dial Antibacterial
					Soap. (Dial Gold) The aftercare will usually only stick to the skin around the tattoo, so
					pick at a corner until you reach the pocket where the tattoo is. Allow soap and water to
					work its way into the bandage until it’s comfortable to take off.
				</li>
				<li>
					Clean the tattoo with Dial Gold in the morning and at night for the next 2 days. (after
					removing the bandage) Lightly pat dry with a paper towel.
				</li>
				<li>
					On the 3rd day after removing the bandage, apply a small amount of non-scented, dye free
					lotion such as, Lubriderm, Jergens, Cornhuskers, Curel, or Eucerin as needed, if it’s dry
					or itchy.
				</li>
				<li
					>If the liquid starts to leak before the first 3 days, remove the bandage as directed
					above and follow the directions below.
				</li>
			</ol>
		</section>

		<section class="ml-4">
			<h2 class="-ml-4 text-2xl font-bold italic mb-4"
				>Taking care of your tattoo if you were unable to be bandaged with Soku:</h2
			>
			<ol>
				<li>
					Leave the bandage we give you on until you get home. When you get home, remove the bandage
					and clean the tattoo lightly with Dial Antibacterial Soap (Dial Gold) and pat dry with a
					clean paper towel. You wont need to do anything else to the tattoo until you go to bed.
					When you go to be clean the tattoo again with Dial Gold and pat dry with a clean paper
					towel again.(if you have pets it is advised that you cover the tattoo with something like
					cling wrap (for the first night only) before you go to bed.(make sure you pat the tattoo
					dry as best as you can before you wrap) Avoid using cloth/towels.
				</li>
				<li>
					Clean the tattoo with Dial Gold in the morning and at night for the first 3-4 days and
					anytime you get sweaty or dirty clean it again. Pat dry with a paper towel
				</li>
				<li>
					Within the first 3-4 days you will also need to apply a VERY thin layer of Aquaphor (or
					other artist approved tattoo aftercare ointment) to the tattoo. Too much ointment can
					suffocate the tattoo causing complications with healing such as seeping or scabbing.
				</li>
				<li>
					Around 5 days after your tattoo has been completed, you can apply non-scented, dye free
					lotion such as, Lubriderm, Jergens, Cornhuskers, Curel, or Eucerin, if it’s dry or itchy.
					Repeat this process for about 2 weeks as needed.
				</li>
				<li>
					Redness, irritation, itchiness, and swelling are all common issues within the healing
					process.
				</li>
				<li>
					Showers are fine but try to avoid getting body washes and shampoos on the fresh tattoo. If
					you do clean the tattoo with Dial Gold again after showering.
				</li>
				<li>
					Avoid any water other than a shower for the first 2-3 weeks after getting your tattoo.
					Absolutely NO lakes, pools, hot tubs, oceans, or baths. Do not submerge your tattoo under
					water.
				</li>
				<li>
					Avoid the sun as much as possible. Sun damage can greatly affect the healing of your
					tattoo causing complications such as infection and excessive fading.
				</li>
			</ol>
		</section>
	</div>
</template>

<style lang="postcss" scoped>
	ol {
		counter-reset: li;
	}
	ol li {
		@apply italic mb-6;
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
