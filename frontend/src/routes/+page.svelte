<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Slideshow from "$lib/components/Slideshow.svelte";
</script>

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
