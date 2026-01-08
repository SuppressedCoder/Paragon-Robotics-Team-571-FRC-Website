<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	
	import Footer from "$lib/components/Footer.svelte";
 	import Slideshow from "$lib/components/Slideshow.svelte";
	import Navbar from "$lib/components/Navbar.svelte";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}

<div class="relative h-screen w-screen overflow-hidden">
  <!-- Background slideshow -->
  <div class="absolute inset-0 -z-10 ">
    <Slideshow />
  </div>

  <!-- Foreground content -->
  <div class="relative flex flex-col h-full">
    <Navbar />
    <div class="flex-1"></div>
    <Footer />
  </div>
</div>

