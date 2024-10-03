<script lang="ts">
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
</script>

{#snippet menuItem(name: string)}
	<li class="text-xl font-medium -tracking-[0.63px]"><button>{name}</button></li>
{/snippet}

<div class="container flex items-end justify-between py-10">
	<a href="/"><img src="/logo.svg" alt="logo" /></a>

	<div>
		{#key $page.route.id}
			<div in:slide={{ duration: 800, delay: 800 }} out:slide={{ duration: 800 }}>
				<ul class="flex items-end justify-end gap-7">
					{#if $page.route.id?.startsWith('/projects')}
						{@render menuItem('Software')}
						{@render menuItem('My Role')}
						{@render menuItem('Outcome')}
					{:else}
						{@render menuItem('Work')}
						{@render menuItem('About')}
						{@render menuItem('Experience')}
						{@render menuItem('Contact')}
					{/if}
				</ul>
			</div>
		{/key}
	</div>
</div>
