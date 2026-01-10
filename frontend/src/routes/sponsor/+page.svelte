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
    <div class="h-full ml-6 mr-6 mb-6 rounded-3xl bg-black/60 backdrop-blur-md p-6 text-white font-mono text-2xl align-left">
        <h1 class="weight">We are greatful for the following sponsors:</h1>
        <div>
          <!-- Add images and logos for sponsors here -->
            <br/>
            Platinum Sponsors - $5,000+
            <br/>
            - Amazon
            <br/>
            Gold Sponsors - $2,000+
            <br/>
            - Town of Windsor
            - Raytheon Technologies
            <br/>
            Silver Sponsors - $1,000+
            <br/>
            - Lions Club of Windsor
            - Rotary Windsor/Windosr Locks Club
            <br/>
            Bronze Sponsors - $500+
            <br/>
            - Windsor Federal
            - Windsor Public Schools
            - INDUS Realty Trust
            - Al Bhoehm
            - Aero Gear
            <br/>
            Patron Sponsors - $200+
            <br/>
            - Ace Hardware 
            - Rabbett Insurance Agency
            - Invisible Gold
        </div>
        <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-3xl absolute bottom-0 mb-6">Become a Sponsor</button>
    </div>
    <Footer />
  </div>
</div>


