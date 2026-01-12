<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  const modules = import.meta.glob(
    "$lib/logos/gold/*.{jpeg,jpg,png,webp}",
    { eager: true, import: "default" }
  );

  const images = Object.values(modules) as string[];

  let index = 0;
  let interval: ReturnType<typeof setInterval>;

  onMount(() => {
    interval = setInterval(() => {
      index = (index + 1) % images.length;
    }, 3100);
  });

  onDestroy(() => clearInterval(interval));
</script>

<div class="relative w-full aspect-[2/1] overflow-hidden bg-slate-950">
  {#each images as img, i}
    <img
      alt="slideshow"
      src={img}
      class="absolute inset-0 w-full h-full object-contain transition-opacity duration-1000"
      style="opacity: {i === index ? 1 : 0}"
    />
  {/each}
</div>
