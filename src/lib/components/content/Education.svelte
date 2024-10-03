<script lang="ts">
	import type { Education } from '$lib/types';
	import Badge from '../ui/Badge.svelte';

	let { title, content, badges }: Education = $props();
</script>

<div class="grid grid-cols-[330px_1fr] gap-16">
	<div>
		<div class="mb-4">
			<h3 class="mb-2 text-2xl font-medium leading-tight tracking-[0.643px] text-[#4C4C4C]">
				{title}
			</h3>
		</div>
		<div class="flex flex-wrap gap-2">
			{#each badges as badge}
				<Badge {...badge} />
			{/each}
		</div>
	</div>
	<div class="text-secondary prose text-lg leading-relaxed">{@html content}</div>
</div>
