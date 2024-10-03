<script lang="ts">
	import type { About } from '$lib/types';
	import TextImageComponent from '../shared/TextImageComponent.svelte';

	let { blocks }: About = $props();
</script>

<div class="container my-20 grid grid-cols-1 gap-16">
	{#each blocks as block}
		<TextImageComponent {...block} />
	{/each}
</div>
