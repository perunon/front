<script lang="ts">
	import type { Software as TSoftware } from '$lib/types';
	import Software from '../content/Software.svelte';

	interface SoftwaresBlockProps {
		data: TSoftware[];
	}

	let { data }: SoftwaresBlockProps = $props();
</script>

<div class="container my-20">
	<h2 class="mb-16 text-4xl leading-none">Software</h2>
	<div class="flex flex-wrap gap-2">
		{#each data as software}
			<Software {...software} />
		{/each}
	</div>
</div>
