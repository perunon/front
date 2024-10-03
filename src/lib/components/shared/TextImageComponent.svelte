<script lang="ts">
	import type { TextImageComponent } from '$lib/types';

	let { title, image, content }: TextImageComponent = $props();
</script>

<div class="group flex items-center gap-11">
	<div class="h-[350px] w-[325px] grayscale transition-all hover:grayscale-0 group-even:order-2">
		<img class="h-full w-full object-cover object-center" src={image.url} alt={image.url} />
	</div>
	<div>
		{#if title}
			<h2 class="mb-8 text-4xl leading-none">{title}</h2>
		{/if}
		<div class="text-secondary prose text-lg leading-relaxed">
			{@html content}
		</div>
	</div>
</div>
