<script lang="ts">
	import Software from '$lib/components/content/Software.svelte';
	import TextImageComponent from '$lib/components/shared/TextImageComponent.svelte';
	import Swiper from '$lib/components/ui/Swiper.svelte';

	const { data } = $props();
</script>

<svelte:head>
	<title>{data.project.title} - {data.project.subtitle}</title>
</svelte:head>

<div class="container mb-20 pt-28">
	<h1 class="mb-4 text-5xl leading-none text-[#0D0D0D]">{data.project.title}</h1>
	<p class="text-3xl leading-tight -tracking-[0.96px] text-secondary">{data.project.subtitle}</p>
</div>
<div class="container my-20">
	<Swiper>
		{#each data.project.images as image}
			<swiper-slide class="h-[320px] w-[426px]">
				<img
					src={image.formats.small.url}
					alt={image.url}
					class="h-full w-full object-cover grayscale transition-all hover:grayscale-0"
				/>
			</swiper-slide>
		{/each}
	</Swiper>
</div>
<div class="container my-20">
	<h2 class="mb-16 text-4xl leading-none">Software</h2>
	<div class="flex flex-wrap gap-2">
		{#each data.project.technologies as technology}
			<Software title={technology.name} />
		{/each}
	</div>
</div>

<div class="container my-20 grid grid-cols-1 gap-16">
	{#each data.project.textImageContent as block}
		<div class="group flex items-center gap-11">
			<div class="max-w-[458px] grayscale transition-all hover:grayscale-0 group-even:order-2">
				<img
					class="h-full w-full object-contain object-center"
					src={block.image.formats.medium.url}
					alt={block.image.url}
				/>
			</div>
			<div>
				{#if block.title}
					<h2 class="mb-8 text-4xl leading-none">{block.title}</h2>
				{/if}
				<div class="prose text-lg leading-relaxed text-secondary">
					{@html block.content}
				</div>
			</div>
		</div>
	{/each}
</div>

<div class="container my-20">
	<h2 class="mb-16 text-4xl leading-none">Process</h2>
	<div class="grid grid-cols-1 gap-11 px-6">
		{#each data.project.processContent as element}
			<div class="grid grid-cols-[330px_1fr] gap-16">
				<div>
					<div class="mb-4">
						<h3 class="mb-2 text-2xl font-medium leading-tight tracking-[0.643px] text-[#4C4C4C]">
							{element.title}
						</h3>
						<p class="text-lg font-medium italic leading-none tracking-[0.386px] text-[#7E7C7C]">
							{element.subtitle}
						</p>
					</div>
				</div>
				<div class="prose text-lg leading-relaxed text-secondary">{@html element.content}</div>
			</div>
		{/each}
	</div>
</div>

<div class="container my-20">
	<div
		class="parallax relative grayscale transition-all hover:grayscale-0"
		style="background-image: url({data.project.bottomImage.formats.large.url})"
	></div>
</div>

<div class="container my-20">
	<h2 class="mb-16 text-4xl leading-none">Outcome</h2>
	<div class="prose max-w-none text-lg leading-relaxed text-secondary">
		{@html data.project.outcome}
	</div>
</div>

<style>
	.parallax {
		/* Set a specific height */
		min-height: 350px;

		/* Create the parallax scrolling effect */
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}

	/* Turn off parallax scrolling for all tablets and phones. Increase/decrease the pixels if needed */
	@media only screen and (max-device-width: 1366px) {
		.parallax {
			background-attachment: scroll;
		}
	}
</style>
