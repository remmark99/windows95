<script lang="ts">
	import List from './List.svelte';
	import startIcon from '$lib/assets/Start.svg';
	import Button from './Button.svelte';

	let show = $state(false);
	let element: HTMLUListElement | null = $state(null);
</script>

<svelte:window
	onclick={(e: MouseEvent) => {
		if (element && e.target && !element.contains(e.target as Node)) show = false;
	}}
/>
<List {show} setElement={(value: HTMLUListElement) => (element = value)} />
<Button
	class={[show && 'inset-shadow-folder!']}
	onclick={(e: MouseEvent) => {
		e.stopPropagation();

		show = !show;
	}}
>
	<img src={startIcon} alt="start" width="16" height="16" class="mr-1" />
	<span class="font-bold">Start</span>
</Button>
