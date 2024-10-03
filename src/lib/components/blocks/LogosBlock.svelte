<script lang="ts">
	import type { Logo } from '$lib/types';

	interface LogosBlockProps {
		data: Logo[];
	}

	let { data }: LogosBlockProps = $props();
</script>

<div class="container my-20">
	<h2 class="mb-16 text-4xl leading-none">Logo Designs</h2>
	<div class="mx-auto grid max-w-[826px] grid-cols-4 border-b border-[#E2E2E2]">
		{#each data.slice(0, 4) as logo}
			<div
				class="flex h-48 items-center justify-center border-r border-[#E2E2E2] grayscale transition-all last:border-none hover:grayscale-0"
			>
				<img src={logo.image.url} alt={logo.image.url} />
			</div>
		{/each}
	</div>
	<div class="mx-auto grid max-w-[826px] grid-cols-4">
		{#each data.slice(4, 8) as logo}
			<div
				class="flex h-48 items-center justify-center border-r border-[#E2E2E2] grayscale transition-all last:border-none hover:grayscale-0"
			>
				<img src={logo.image.url} alt={logo.image.url} />
			</div>
		{/each}
	</div>
</div>
