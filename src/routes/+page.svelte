<script lang="ts">
	import CaseStudiesBlock from '$lib/components/blocks/CaseStudiesBlock.svelte';
	import EducationsBlock from '$lib/components/blocks/EducationsBlock.svelte';
	import ExperiencesBlock from '$lib/components/blocks/ExperiencesBlock.svelte';
	import LogosBlock from '$lib/components/blocks/LogosBlock.svelte';
	import SoftwaresBlock from '$lib/components/blocks/SoftwaresBlock.svelte';
	import About from '$lib/components/single/About.svelte';
	import Hero from '$lib/components/single/Hero.svelte';

	const { data } = $props();
</script>

<svelte:head>
	<title>Julia Ratomska</title>
</svelte:head>

<Hero {...data.hero} />

<CaseStudiesBlock data={data.caseStudies} />

<LogosBlock data={data.logos} />

<About {...data.about} />

<ExperiencesBlock data={data.experiences} />

<SoftwaresBlock data={data.softwares} />

<EducationsBlock data={data.educations} />
