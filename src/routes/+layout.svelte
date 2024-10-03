<script>
	import '@fontsource-variable/dm-sans';
	import '../app.css';
	import Navbar from '$lib/components/ui/Navbar.svelte';
	import Footer from '$lib/components/ui/Footer.svelte';
</script>

<Navbar />
<slot></slot>
<Footer />
