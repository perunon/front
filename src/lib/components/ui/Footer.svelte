<script lang="ts">
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<div class="container border-t border-[#2B2B2B] pb-16 pt-24">
	<div class="mb-20 flex justify-between">
		<div>
			<p
				class="inline max-w-[457px] bg-[url(/icons/arrow-right.svg)] bg-right bg-no-repeat pr-10 text-3xl leading-tight -tracking-[0.96px]"
			>
				Let’s create something awesome<br />— don’t be shy, say hi!
			</p>
		</div>
		<div class="flex flex-col items-end">
			<a
				href="mailto:xjuliaratomska@gmail.com"
				class="mb-3 block text-3xl leading-normal -tracking-[0.96px]"
			>
				xjuliaratomska@gmail.com
			</a>
			<button
				class="text-lg font-medium leading-tight -tracking-[0.54px] underline"
				on:click={scrollToTop}>Back to top ↗</button
			>
		</div>
	</div>
	<div class="flex justify-between">
		<p>&copy; Julia Ratomska {new Date().getFullYear()}</p>

		<div class="flex items-center gap-9 px-4">
			<a href="#" class="block">
				<img src="/icons/linkedin.svg" alt="LinkedIn" />
			</a>
			<a href="#" class="block">
				<img src="/icons/instagram.svg" alt="Instagram" />
			</a>
			<a href="#" class="block">
				<img src="/icons/code.svg" alt="Code" />
			</a>
		</div>
	</div>
</div>
