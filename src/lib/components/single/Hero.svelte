<script lang="ts">
	import type { Hero } from '$lib/types';

	let { title, subtitle, content }: Hero = $props();
</script>

<section class="container">
	<div class="my-28 flex items-end justify-between">
		<div>
			<h1 class="mb-1 text-6xl font-medium leading-none -tracking-[1.8px]">{title}</h1>
			<h2 class="text-secondary text-5xl leading-none">{subtitle}</h2>
		</div>
		<p class="text-secondary max-w-[580px] text-3xl leading-tight -tracking-[0.96px]">{content}</p>
	</div>
	<img class="animate-bounce" src="/icons/arrow-down.svg" alt="Arrow pointing down" />
</section>
