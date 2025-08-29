<script>
	const { children } = $props();
</script>

<div class="h-full bg-white p-4 flex gap-15 flex-wrap inset-shadow-folder folder">
	{@render children()}
</div>
