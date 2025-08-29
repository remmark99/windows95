<script lang="ts">
	import ApplicationTitlebar from './ApplicationTitlebar.svelte';
	import { applicationsState, isMoving, focusedApp } from '../state';
	import { portal } from 'svelte-portal';

	const { icon, title, contentClass = '', titleClass = '', children } = $props();
	let left = $state(0);
	let top = $state(0);
	let isOpen = $state(false);
	const applicationState = applicationsState.get(title);
	let applicationWindow: HTMLDivElement;

	function moveApplication(e) {
    const container = document.getElementsByTagName("main")[0].getBoundingClientRect();
		const maxX = container.width - applicationWindow.getBoundingClientRect().width;
		const maxY = container.height - applicationWindow.getBoundingClientRect().height;

		if ($isMoving === title) {
			left = Math.min(Math.max(left + e.movementX, 0), maxX);
			top = Math.min(Math.max(top + e.movementY, 0), maxY);
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
	// focus:bg-[#091558]
</script>

<svelte:window onmousemove={moveApplication} onmouseup={() => isMoving.set(null)} />
<button
	class="icon application-icon flex flex-col w-20 max-h-20 items-center focus:outline-none"
	ondblclick={openWindow}
>
	<img src={icon} alt="Application icon" height="32" width="32" class="m-2" />

	<span class="inline-block text-center leading-4">{title}</span>
</button>

<div
	bind:this={applicationWindow}
	use:portal
	role="dialog"
	tabindex="0"
	class={[
		'absolute h-1 min-h-[80vh] w-[50vw] min-w-[50vw] bg-grey p-1 inset-shadow-window',
		{ hidden: applicationState?.isMinimized || !isOpen },
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
		<div class={['custom-scrollbar m-auto h-full w-full grow overflow-y-auto', contentClass]}>
			{#if $isMoving}
				<div class="drag-overlay"></div>
			{/if}
			{@render children()}
		</div>
	</div>
</div>

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

	.icon:focus img {
		filter: brightness(8%) sepia(10) saturate(50) hue-rotate(200deg);
	}

	.icon:focus span {
		background: #091558;
		border: dotted 1px white;
	}
</style>
