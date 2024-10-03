<script lang="ts">
	import type { Experience } from '$lib/types';
	import Badge from '../ui/Badge.svelte';

	let { title, subtitle, content, badges }: Experience = $props();
</script>

<div class="grid grid-cols-[330px_1fr] gap-16">
	<div>
		<div class="mb-4">
			<h3 class="mb-4 text-2xl font-medium leading-tight tracking-[0.643px] text-[#4C4C4C]">
				{title}
			</h3>
			<p class="text-lg font-medium italic leading-none tracking-[0.386px] text-[#7E7C7C]">
				{subtitle}
			</p>
		</div>
		<div class="flex flex-wrap gap-2">
			{#each badges as badge}
				<Badge {...badge} />
			{/each}
		</div>
	</div>
	<div class="text-secondary prose text-lg leading-relaxed">{@html content}</div>
</div>
