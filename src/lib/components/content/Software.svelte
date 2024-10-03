<script lang="ts">
	import type { Software } from '$lib/types';

	let { title }: Software = $props();
</script>

<div
	class="flex items-center justify-center rounded-2xl border border-[#686868] bg-white px-4 py-2"
>
	<p class="text-xs font-medium tracking-[0.5px] text-[#6D6D6D]">{title}</p>
</div>
