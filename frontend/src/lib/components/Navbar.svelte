<script>
  import logo from "$lib/assets/widelogo.png";
</script>

<div class="p-6">
  <div
    class="
      inline-flex items-center gap-6
      bg-black/60 backdrop-blur-md
      rounded-2xl shadow-2xl
      px-6 py-4
      hover:bg-black/75
      hover:transition duration-300
    "
  >
    <img
      src={logo}
      alt="logo"
      class="h-42 w-auto"
    />

    <nav class="flex flex-col text-blue-500 font-mono text-md text-2xl">
      <a href="/" class="hover:text-blue-300">Home</a>
      <a href="/subteams" class="hover:text-blue-300">Subteams</a>
      <a href="/sponsor" class="hover:text-blue-300">Sponsor</a>
      <a target="_blank" href="https://github.com/WindsorCT-Robotics/scouting" class="hover:text-blue-300">DiamondScout</a>
    </nav>
  </div>
</div>
