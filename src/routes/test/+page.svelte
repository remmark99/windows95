<script lang="ts">
	import { test } from '../../state';
	console.log(test);
	console.log(test.entries());
</script>

{#each test.entries() as [k, t]}
	<div>{t.text}</div>
{/each}

<a href="test2">CLICK ME</a>
