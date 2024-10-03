<script lang="ts">
	import type { StrapiImage } from '$lib/types';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	// import function to register Swiper custom elements
	import { register } from 'swiper/element/bundle';
	import type { SwiperOptions } from 'swiper/types';

	// register Swiper custom elements
	register();

	interface SwiperProps {
		children: any;
	}

	let { children }: SwiperProps = $props();

	onMount(() => {
		// swiper element
		let swiperEl = document.querySelector('swiper-container') as HTMLElement;

		// swiper parameters
		const swiperParams: SwiperOptions = {
			slidesPerView: 'auto',
			spaceBetween: 26,
			on: {
				init: (swiper) => {
					swiper.el.style.overflow = 'visible';
				}
			}
		};

		// now we need to assign all parameters to Swiper element
		Object.assign(swiperEl, swiperParams);

		// and now initialize it
		swiperEl.initialize();
	});
</script>

<div in:fly={{ y: 100 }}>
	<swiper-container init="false" class="cursor-pointer">
		{@render children()}
	</swiper-container>
</div>
