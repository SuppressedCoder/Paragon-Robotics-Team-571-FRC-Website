<!-- WIP -->

<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Slideshow from "$lib/components/Slideshow.svelte";
</script>

<!-- Keep this on every page, do not move to layout. This will break foreground content-->
<div class="relative h-screen w-screen overflow-hidden">
  <!-- Background slideshow -->
  <div class="absolute inset-0 -z-10 ">
    <Slideshow />
  </div>

  <!-- Foreground content -->
  <div class="relative flex flex-col h-full">
    <Navbar />
    <div class="flex-1"></div>
    <div class="ml-6 rounded-3xl bg-black/60 backdrop-blur-md p-6 text-white font-mono text-2xl align-left mr-auto mb-auto">
        <h1>Donate</h1>
    </div>
    <Footer />
  </div>
</div>


