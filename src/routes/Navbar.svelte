<script lang="ts">
	import NavbarItem from '../components/NavbarItem.svelte';
	import folderIcon from '$lib/assets/Folder.svg';
	import { applicationsState } from '../state';
	import { focusedApp } from '../state';
	import StartButton from '../components/StartButton.svelte';
</script>

<nav class="z-20 flex justify-between bg-grey p-1">
	<div class="relative flex space-x-1">
		<StartButton />
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
	<div class="flex w-16 space-x-2 px-1 inset-shadow-time items-center">
		<img src={folderIcon} alt="Folder" width="16px" height="16px" />
		<span>{new Date().toLocaleString('ru-RU', { hour: 'numeric', minute: 'numeric' })}</span>
	</div>
</nav>
