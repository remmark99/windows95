<script lang="ts">
	import ApplicationTitlebar from './ApplicationTitlebar.svelte';
	import { applicationsState } from '../state.svelte';

	const { icon, title } = $props();
	let isOpen = $state(false);
	let applicationState = $derived(applicationsState.get(title));
  console.log(applicationState);
  let isFocused = applicationState?.isFocused;
  let isMinimized = applicationState?.isMinimized;

	function openWindow() {
		isOpen = !isOpen;

		// unfocus old
		for (const [application, isFocused] of applicationsState) {
			if (isFocused) {
				applicationsState.set(application, {
					isFocused: false,
					isMinimized: false
				});
				break;
			}
		}

		applicationsState.set(title, {
			isFocused: true,
			isMinimized: false
		});
	}

	function closeWindow() {
		isOpen = !isOpen;
		applicationsState.delete(title);
	}
</script>

<button class="flex h-20 w-10 flex-col items-center" ondblclick={openWindow}>
	<img src={icon} alt="Application icon" />
	<span class="text-center">{title}</span>
</button>

{#if isOpen}
	<div
		class={[
			'flex h-100 w-200 flex-col bg-grey px-1 py-0.5 inset-shadow-window absolute',
			{ hidden: isMinimized }
		]}
	>
		<ApplicationTitlebar
			isFocused={isFocused}
			{icon}
			{title}
			onminimize={() => (isMinimized = !isMinimized)}
			onmaximize={() => console.log(2)}
			onclose={closeWindow}
		/>
		<div class="custom-scrollbar h-96 grow overflow-y-scroll">
			<iframe
				src="https://drive.google.com/file/d/1hF_nT7naEeprhpLAokmPle75777FtNsg/preview"
				title="My resume"
				width="100%"
				height="800px"
			>
			</iframe>
		</div>
	</div>
{/if}
