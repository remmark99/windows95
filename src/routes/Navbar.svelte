<script lang="ts">
	import NavbarItem from '../components/NavbarItem.svelte';
	import startIcon from '$lib/assets/Start.svg';
	import folderIcon from '$lib/assets/Folder.svg';
	import { applicationsState } from '../state';
	import { focusedApp } from '../state';
</script>

<nav class="flex justify-between bg-grey p-1 z-20">
	<div class="flex space-x-1">
		<NavbarItem text="Start" icon={startIcon} class="w-16! font-bold" />
		{#each applicationsState.entries() as [title, { isMinimized }] (title)}
			<NavbarItem
				text={title}
				icon={folderIcon}
				class={{
					'shadow-none inset-shadow-navlink conic-bg': $focusedApp === title && !isMinimized
				}}
				onclick={() => focusedApp.set(title)}
			/>
		{/each}
	</div>
	<div class="flex w-21 space-x-2 px-1 inset-shadow-time">
		<img src={folderIcon} alt="Folder" width="16px" height="16px" />
		<span>10:36 PM</span>
	</div>
</nav>
