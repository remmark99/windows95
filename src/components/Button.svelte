<script lang="ts">
	const { children, onclick, ...props } = $props();
</script>

<button
	class={['button bg-grey p-1 text-black inset-shadow-window focus:outline-none active:inset-shadow-folder', props.class]}
	{onclick}
>
	<div class="flex items-center justify-center focus:border focus:border-dotted box-border px-0.5">
		{@render children()}
	</div>
</button>

<style>
  .button > div {
    border: 1px dotted transparent;
  }

  .button:focus > div {
    border: 1px dotted black;
  }
</style>
