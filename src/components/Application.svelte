<script lang="ts">
	import ApplicationTitlebar from './ApplicationTitlebar.svelte';
	import { applicationsState, isMoving } from '../state.svelte';
	import { focusApplication } from '$lib/helpers.svelte';

	const { icon, title, contentClass, children } = $props();
	let isOpen = $state(false);
	let left = $state(300);
	let top = $state(300);
	let appState = $derived(applicationsState.get(title));
	let isFocused = $derived(appState?.isFocused ?? false);
	let isMinimized = $derived(appState?.isMinimized ?? false);

	function moveApplication(e) {
		if ($isMoving === title) {
			left += e.movementX;
			top += e.movementY;
		}
	}

	function openWindow() {
		isOpen = !isOpen;

		applicationsState.set(title, {
			isFocused: false,
			isMinimized: false
		});

		focusApplication(title);
	}

	function closeWindow() {
		isOpen = !isOpen;
		applicationsState.delete(title);
	}
</script>

<svelte:window onmousemove={moveApplication} />
<button class="flex h-20 w-10 flex-col items-center" ondblclick={openWindow}>
	<img src={icon} alt="Application icon" />
	<span class="text-center">{title}</span>
</button>
{#if isOpen}
	<div
		class={[
			'application absolute flex h-100 w-200 flex-col bg-grey px-1 py-0.5 inset-shadow-window',
			{ hidden: isMinimized },
			isFocused && 'z-10',
			$isMoving && 'select-none'
		]}
		style="transform: translate({left}px, {top}px)"
		onmousedown={() => focusApplication(title)}
	>
		<ApplicationTitlebar
			{isFocused}
			{icon}
			{title}
			onminimize={() => (isMinimized = !isMinimized)}
			onmaximize={() => {}}
			onclose={closeWindow}
			onmousedown={(event) => {
				const target = event.target as HTMLElement;

				if (target.closest('button')) return;
				isMoving.set(title);
			}}
		/>
		<div class={['custom-scrollbar h-96 grow overflow-y-scroll', contentClass]}>
			{#if $isMoving}
				<div class="drag-overlay" />
			{/if}
			{@render children()}
		</div>
	</div>
{/if}

<style>
	.drag-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 50;
		cursor: grabbing;
		background-color: rgba(0, 0, 0, 0);
	}
</style>
