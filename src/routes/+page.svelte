<script lang="ts">
	import Application from '../components/Application.svelte';
	import folderIcon from '$lib/assets/Folder.svg';
</script>

<main class="flex-grow bg-[#008080] p-4">
	<Application icon={folderIcon} title="Test" />
	<Application icon={folderIcon} title="Resume" />
</main>
