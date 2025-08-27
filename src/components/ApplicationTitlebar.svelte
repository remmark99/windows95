<script lang="ts">
	import Button from './Button.svelte';

	const { icon, title, onclose, onmaximize, onminimize, isFocused, onmousedown } = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class={[
		'flex cursor-move items-center justify-between bg-[#7b7d7b] p-1 text-white',
		isFocused && 'bg-blue'
	]}
	{onmousedown}
>
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
<div class="pl-4 space-x-1">
	<span><u>F</u>ile</span>
	<span><u>E</u>dit</span>
	<span><u>V</u>iew</span>
	<span><u>H</u>elp</span>
</div>
