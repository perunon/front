<script lang="ts">
	import type { CaseStudy, CaseStudyTeaser, Logo } from '$lib/types';
	import Swiper from '../ui/Swiper.svelte';

	interface CaseStudiesBlockProps {
		data: CaseStudyTeaser[];
	}

	let { data }: CaseStudiesBlockProps = $props();
</script>

<div class="container my-20">
	<h2 class="mb-16 text-4xl leading-none">Case Studies</h2>
	<Swiper>
		{#each data as slide}
			<swiper-slide class="h-[350px] w-[325px]">
				<a href="/projects/{slide.slug}">
					<img
						src={slide.mainImage.formats.small.url}
						alt={slide.mainImage.url}
						class="h-full w-full object-cover grayscale transition-all hover:grayscale-0"
					/>
				</a>
			</swiper-slide>
		{/each}
	</Swiper>
</div>
