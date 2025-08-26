<script lang="ts">
	import ApplicationTitlebar from './ApplicationTitlebar.svelte';
	import { applicationsState, isMoving, focusedApp } from '../state';
	import { portal } from 'svelte-portal';

	const { icon, title, contentClass = '', children } = $props();
	let left = $state(0);
	let top = $state(0);
	let isOpen = $state(false);
	const applicationState = applicationsState.get(title);

	function moveApplication(e) {
		if ($isMoving === title) {
			left += e.movementX;
			top += e.movementY;
		}
	}

	function openWindow() {
		isOpen = true;

		applicationsState.set(title, {
			isMinimized: false
		});

		$focusedApp = title;
	}

	function closeWindow() {
		applicationsState.delete(title);
    isOpen = false;
		$focusedApp = null;
	}
</script>

<svelte:window onmousemove={moveApplication} onmouseup={() => isMoving.set(null)} />
<button class="flex h-20 w-10 flex-col items-center" ondblclick={openWindow}>
	<img src={icon} alt="Application icon" />
	<span class="text-center">{title}</span>
</button>

{#if isOpen}
	<div
		use:portal
		role="dialog"
		tabindex="0"
		class={[
			'h-200 w-200 bg-grey px-1 py-0.5 inset-shadow-window absolute',
			{ hidden: applicationState?.isMinimized },
			$focusedApp === title && 'z-10',
			$isMoving && 'select-none'
		]}
		style="transform: translate({left}px, {top}px)"
		onmousedown={() => ($focusedApp = title)}
	>
		<div class="flex h-full flex-col">
			<ApplicationTitlebar
				isFocused={$focusedApp === title}
				{icon}
				{title}
				onminimize={() => (applicationState!.isMinimized = true)}
				onmaximize={() => {}}
				onclose={closeWindow}
				onmousedown={(event) => {
					const target = event.target as HTMLElement;

					if (target.closest('button')) return;
					isMoving.set(title);
				}}
			/>
			<div class={['custom-scrollbar h-full grow overflow-y-auto', contentClass]}>
				{#if $isMoving}
					<div class="drag-overlay"></div>
				{/if}
				{@render children()}
			</div>
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
