<script lang="ts">
	interface BadgeProps {
		name: string;
	}

	let { name }: BadgeProps = $props();
</script>

<div class="flex items-center justify-center rounded-2xl bg-[#EDEDED] px-4 py-2">
	<p class="text-xs font-medium tracking-[0.257px] text-[#666]">{name}</p>
</div>
