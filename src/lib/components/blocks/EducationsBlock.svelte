<script lang="ts">
	import type { Education as TEducation } from '$lib/types';
	import Education from '../content/Education.svelte';

	interface EducationsBlockProps {
		data: TEducation[];
	}

	let { data }: EducationsBlockProps = $props();
</script>

<div class="container my-20">
	<h2 class="mb-16 text-4xl leading-none">Education</h2>
	<div class="grid grid-cols-1 gap-11 px-6">
		{#each data as education}
			<Education {...education} />
		{/each}
	</div>
</div>
