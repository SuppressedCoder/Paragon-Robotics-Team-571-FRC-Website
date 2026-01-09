<script>
  import logo from "$lib/assets/widelogo.png";
</script>

<div class="p-6">
  <div
    class="
      inline-flex items-center gap-6
      bg-black/40 backdrop-blur-md
      rounded-2xl shadow-2xl
      px-6 py-4
    "
  >
    <img
      src={logo}
      alt="logo"
      class="h-42 w-auto"
    />

    <nav class="flex flex-col text-blue-500 font-mono text-md">
      <a href="/" class="hover:text-blue-300">Home</a>
      <a href="/subteams" class="hover:text-blue-300">Subteams</a>
      <a href="/diamond" class="hover:text-blue-300">DiamondScout</a>
    </nav>
  </div>
</div>
