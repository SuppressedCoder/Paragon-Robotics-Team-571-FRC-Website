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
    <div class="h-full w-1/2 ml-6 rounded-3xl bg-black/60 backdrop-blur-md p-6 text-white font-mono text-2xl align-left mr-auto">
        <h1 class="weight">Students have the choice to paricipate in any one of the following subteams:</h1>
        <div>
            <br/>
            <p>
            - Build - These students are responsible for the construction of the robot throughout the build season. They utilize CAD designs, 3D printing, and traditional engineering methods to build the robot.
            <br/>
            <br/>
            - Programming - These students are responsible for programming the robot throughout the build season. They utilize Java. They work closelu with the Build team to ensure the robot is programmed adequitely. They work closely with the Media team for website upkeep.
                <br/>
            <br/>
            - Media - These students are responsible for the public facing media throughout the build season. They work to make videos, publish articles, and handle outreach for the team.
            <br/>
            </p>
        </div>
    </div>
    <Footer />
  </div>
</div>


