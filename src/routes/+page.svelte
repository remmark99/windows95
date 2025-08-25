<script lang="ts">
	import Application from '../components/Application.svelte';
	import folderIcon from '$lib/assets/Folder.svg';
	import { applicationsState, isMoving } from '../state.svelte';
	import Folder from '../components/Folder.svelte';

	const applications = $derived(applicationsState.entries());
  console.log(applications)
</script>

<main class="flex-grow bg-[#008080] p-4" onmouseup={() => isMoving.set(null)}>
	<Application icon={folderIcon} title="Notes">
		<Folder />
	</Application>
	<Application icon={folderIcon} title="Resume" contentClass="overflow-y-hidden!">
		<iframe
			src="https://drive.google.com/file/d/1hF_nT7naEeprhpLAokmPle75777FtNsg/preview"
			title="My resume"
			width="100%"
			height="800px"
		>
		</iframe>
	</Application>
	{#each applications as [key, value] (key)}
		<div>Hello</div>
	{/each}
</main>
