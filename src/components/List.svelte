<script lang="ts">
	import ListItem from './ListItem.svelte';
	import ShutDownIcon from '$lib/assets/ShutDown.svg';
	import ProgramsIcon from '$lib/assets/Programs.svg';
	import DocumentsIcon from '$lib/assets/Documents.svg';
	import SettingsIcon from '$lib/assets/Settings.svg';
	import FindIcon from '$lib/assets/Find.svg';
	import HelpIcon from '$lib/assets/Help.svg';
	import ListSeparator from './ListSeparator.svelte';
	import { onMount } from 'svelte';

	const { show, setElement } = $props();

	let root: HTMLUListElement;

	onMount(() => {
		if (root) setElement(root);
	});

	const menuItems = [
		{
			text: 'Programs',
			icon: ProgramsIcon
		},
		{
			text: 'Documents',
			icon: DocumentsIcon
		},
		{
			text: 'Settings',
			icon: SettingsIcon
		},
		{
			text: 'Find',
			icon: FindIcon
		},
		{
			text: 'Help',
			icon: HelpIcon
		},
		{
			text: 'Run',
			icon: ProgramsIcon
		}
	];
</script>

<ul
	bind:this={root}
	id="start-menu"
	role="menu"
	class={['w-50 bg-grey px-0.5 pt-0.5 pb-0.75 inset-shadow-list', !show && 'hidden']}
>
	{#each menuItems as { icon, text } (text)}
		<ListItem {icon} alt={text}>{text}</ListItem>
	{/each}
	<ListSeparator />
	<ListItem icon={ShutDownIcon} alt="Shut down">Shut Down</ListItem>
</ul>

<style>
	#start-menu {
		position: absolute;
		/* top: 100%; */
		bottom: 2rem;
		left: -0.25rem;
	}
</style>
