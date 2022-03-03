<template>
	<div class="max-w-2xl mx-auto px-6 mb-8 lg:mb-20">
		<div class="mb-12">
			<BaseHeading class="ml-8 mb-4">
				<h1 class="text-shadow relative text-3xl lg:text-5xl leading-tight uppercase italic ml-4">
					Contact Us
				</h1>
			</BaseHeading>

			<p
				v-if="responseMessage"
				:class="`${responseState === 'success' ? 'text-green-700' : 'text-red-700'} text-sm`"
			>
				{{ this.responseMessage }}
			</p>
		</div>

		<section class="mb-20">
			<form
				name="contact"
				@submit.prevent="handleSubmit"
				data-netlify="true"
				data-netlify-honepot="bot-field"
			>
				<input class="hidden" type="hidden" name="form-name" value="contact" />
				<div class="grid md:grid-cols-2 gap-8">
					<div class="flex flex-col mb-6">
						<label class="mb-2" for="name">
							Name
						</label>
						<input id="name" type="text" class="border border-black-900 p-2" v-model="form.name" required/>
					</div>

					<div class="flex flex-col mb-6">
						<label class="mb-2" for="email">
							Email
						</label>
						<input
							id="email"
							type="text"
							class="border border-black-900 p-2"
							v-model="form.email"
							required
						/>
					</div>
				</div>

				<div class="flex flex-col mb-6">
					<label class="mb-2" for="message">
						Message
					</label>
					<textarea
						id="message"
						rows="4"
						class="border border-black-900 p-2"
						v-model="form.message"
						required
					/>
				</div>

				<p class="hidden">
					<label>Don't fill this out if you're human: <input name="bot-field"/></label>
				</p>

				<button class="btn" type="submit">Submit</button>
			</form>
		</section>

		<div class="mt-12 md:mt-24">
			<iframe
				class="h-full w-full"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.3770428250023!2d-83.62944238481647!3d32.8352672809545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f3fe7ba9eb77c7%3A0x189d2b50d13222cb!2s484%20Cherry%20St%2C%20Macon%2C%20GA%2031201!5e0!3m2!1sen!2sus!4v1644718312628!5m2!1sen!2sus"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
			></iframe>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Contact',
		data() {
			return {
				form: {
					name: '',
					email: '',
					message: '',
				},
				responseMessage: null,
				responseState: null,
			};
		},
		methods: {
			encode(data) {
				return Object.keys(data)
					.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
					.join('&');
			},
			handleSubmit() {
				fetch('/', {
					method: 'post',
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
					body: this.encode({
						'form-name': 'contact',
						...this.form,
					}),
				})
					.then((res, err) => {
						if (res.status === 200) {
							this.responseMessage = "Thanks for reaching out! We'll be in contact shortly!";
							this.responseState = 'success';

							this.form.name = '';
							this.form.email = '';
							this.form.message = '';
						} else {
							this.responseMessage = 'Oops! Looks like something went wrong. Please try again!';
							this.responseState = 'error';
						}
					})
					.catch((e) => console.error(e));
			},
		},
	};
</script>
