<script lang="ts">
	import { test } from '../state';
</script>

{#each test.entries() as [_, t] (_)}
	<t.component>Haha</t.component>
{/each}

<a href="test2">CLICK ME</a>
