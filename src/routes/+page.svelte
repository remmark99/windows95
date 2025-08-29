<script lang="ts">
	import Application from '../components/Application.svelte';
	import folderIcon from '$lib/assets/Folder.svg';
	import Folder from '../components/Folder.svelte';
	import Clippy from '../components/Clippy.svelte';
  import noteIcon from "$lib/assets/Note.svg";
	import Tabs from '../components/Tabs.svelte';
	const modules = import.meta.glob('../notes/*.svx', { eager: true });
</script>

<main class="relative flex-grow flex gap-y-4 flex-col flex-wrap bg-[#008080] py-4">
	<div class="contents" role="grid" tabindex="0">
    <Tabs />
		<Application icon={folderIcon} title="Notes">
			<Folder>
				{#each Object.entries(modules) as [todo, module] (todo)}
					{@const Note = module.default}
					{@const metadata = module.metadata}
					<Application title={metadata.title} icon={noteIcon}>
						<div class="prose">
							<Note />
						</div>
					</Application>
				{/each}
			</Folder>
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
		<Clippy />
	</div>
</main>
