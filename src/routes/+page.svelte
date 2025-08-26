<script lang="ts">
	import Application from '../components/Application.svelte';
	import folderIcon from '$lib/assets/Folder.svg';
	import Folder from '../components/Folder.svelte';
	import { applicationsState } from '../state';
	import Svxfile from '../test.svx';

	console.log($state.snapshot(applicationsState));
</script>

<main class="flex-grow bg-[#008080] p-4">
	<div class="contents" role="grid" tabindex="0">
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
		<Application icon={folderIcon} title="TESTNOTE">
			<Svxfile />
		</Application>
	</div>
</main>
