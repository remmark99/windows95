<script>
	const { children } = $props();
</script>

<div class="h-full bg-white p-4 flex gap-4 gap-y-8 flex-wrap inset-shadow-folder folder content-start">
	{@render children()}
</div>
