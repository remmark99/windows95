<script lang="ts">
	import Application from '../components/Application.svelte';
	import folderIcon from '$lib/assets/Folder.svg';
	import { isMoving } from '../state.svelte';
</script>

<main class="flex-grow bg-[#008080] p-4" onmouseup={() => isMoving.set(null)}>
	<Application icon={folderIcon} title="Test">Hello</Application>
	<Application icon={folderIcon} title="Resume" contentClass="overflow-y-hidden!">
		<iframe
			src="https://drive.google.com/file/d/1hF_nT7naEeprhpLAokmPle75777FtNsg/preview"
			title="My resume"
			width="100%"
			height="800px"
		>
		</iframe>
	</Application>
</main>
