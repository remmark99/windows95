<script lang="ts">
  const { children, onclick, ...props } = $props();
</script>

<button class={["inset-shadow-window bg-grey p-1 text-black flex items-center justify-center", props.class]} onclick={onclick}>
  {@render children()}
</button>
