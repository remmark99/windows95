<script lang="ts">
	import Button from './Button.svelte';

	const { icon, title, onclose, onmaximize, onminimize, isFocused } = $props();
  console.log(isFocused);
</script>

<div class={['flex items-center justify-between bg-[#7b7d7b] p-1 text-white', isFocused && 'bg-blue']}>
	<div class="flex items-center space-x-1">
		<img src={icon} alt="Application icon" height="16" width="16" />
		<span>{title}</span>
	</div>

	<div class="flex items-center space-x-0.5">
		<Button class="h-4 w-4" onclick={onminimize}>
			<div class="h-full w-full border-b-2 border-b-black"></div>
		</Button>
		<Button class="h-4 w-4" onclick={onmaximize}>
			<div class="h-full w-full border border-t-2 border-black"></div>
		</Button>
		<Button class="h-4 w-4" onclick={onclose}>
			<span>X</span>
		</Button>
	</div>
</div>
