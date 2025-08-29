<script lang="ts">
	import Application from '../components/Application.svelte';
	import folderIcon from '$lib/assets/Folder.svg';
	import Folder from '../components/Folder.svelte';
	import Clippy from '../components/Clippy.svelte';
	const modules = import.meta.glob('../notes/*.svx', { eager: true });
</script>

<main class="flex-grow bg-[#008080] p-4 relative">
	<div class="contents" role="grid" tabindex="0">
		<Application icon={folderIcon} title="Notes">
			<Folder>
				{#each Object.entries(modules) as [todo, module] (todo)}
					{@const Note = module.default}
					<Application title={todo.split("/")[2]} icon={folderIcon}>
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
