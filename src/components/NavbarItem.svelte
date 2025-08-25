<script lang="ts">
	const { text, icon, onclick, ...props } = $props();
</script>

<button class={['flex w-30 items-center bg-grey px-1 inset-shadow-btn', props.class]} {onclick}>
	<img src={icon} alt="Windows logo" width="16" height="16" class="mr-1" />
	{text}
</button>
