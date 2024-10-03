<script lang="ts">
	import type { Experience as TExperience } from '$lib/types';
	import Experience from '../content/Experience.svelte';

	interface ExperiencesBlockProps {
		data: TExperience[];
	}

	let { data }: ExperiencesBlockProps = $props();
</script>

<div class="container my-20">
	<h2 class="mb-16 text-4xl leading-none">Experience</h2>
	<div class="grid grid-cols-1 gap-11 px-6">
		{#each data as experience}
			<Experience {...experience} />
		{/each}
	</div>
</div>
