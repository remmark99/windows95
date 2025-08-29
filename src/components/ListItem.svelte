<script lang="ts">
	const { icon, alt, children } = $props();
</script>

<li>
	<button class="flex items-center gap-2 cursor-pointer w-full h-full p-0.5 hover:bg-blue hover:text-white" role="menuitem">
		<img src={icon} {alt} />
		<span>{@render children()}</span>
	</button>
</li>
