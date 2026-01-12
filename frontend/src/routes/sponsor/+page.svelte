<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Slideshow from "$lib/components/Slideshow.svelte";
	import PLLogoSlideshow from "$lib/components/LogoSlideshow/PLLogoSlideshow.svelte";
  import PALogoSlideshow from "$lib/components/LogoSlideshow/PALogoSlideshow.svelte";
  import SLogoSlideshow from "$lib/components/LogoSlideshow/SLogoSlideshow.svelte";
  import GLogoSlideshow from "$lib/components/LogoSlideshow/GLogoSlideshow.svelte";
  import BLogoSlideshow from "$lib/components/LogoSlideshow/BLogoSlideshow.svelte";
</script>

<!-- Keep this on every page, do not move to layout. This will break foreground content-->
<div class="relative min-h-screen w-screen">
  <!-- Background slideshow -->
  <div class="absolute inset-0 -z-10 ">
    <Slideshow />
  </div>

  <!-- Foreground content -->
  <div class="relative flex flex-col h-full">
    <Navbar />
    <div class="flex-1"></div>
    <div class="h-full ml-6 mr-6 mb-6 rounded-3xl bg-black/60 backdrop-blur-md p-6 text-white font-mono text-2xl align-left">
        <h1 class="weight-bold">We are greatful for the following sponsors:</h1>
        <div class="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          <div class="flex flex-col gap-4">
            <div class="text-xl font-bold">$5000+</div>
            <PLLogoSlideshow />
          </div>
          <div class="flex flex-col gap-4">
            <div class="text-xl font-bold">$2000+</div>
            <GLogoSlideshow />
          </div>
          <div class="flex flex-col gap-4">
            <div class="text-xl font-bold">$1000+</div>
            <SLogoSlideshow />
          </div>
          <div class="flex flex-col gap-4">
            <div class="text-xl font-bold">$500+</div>
            <BLogoSlideshow />
          </div>
          <div class="flex flex-col gap-4">
            <div class="text-xl font-bold">$200+</div>
            <PALogoSlideshow />
          </div>
          <div class="lg:col-start-3 lg:row-start-2">
            <button class="h-full w-full bg-blue-600 hover:bg-blue-800 text-white text-2xl font-bold py-2 px-4 rounded-3xl">
              Become a Sponsor
            </button>
          </div>
        </div>
    </div>
    <Footer />
  </div>
</div>
