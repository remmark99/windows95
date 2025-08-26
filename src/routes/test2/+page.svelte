<script lang="ts">
	import Button from '../../components/Button.svelte';
	import Test from '../../components/Test.svelte';
	import { test } from '../../state';

	const t = test;
</script>

<button
	onclick={() => {
		t.set(Math.random(), { text: 'haha', component: Button });
	}}>button</button
>
<button
	onclick={() => {
		const iter = t.keys();
		const { value: key } = iter.next();
		t.set(key!, { text: 'haha', component: Button });
	}}>CHANGE</button
>
<Test />
<a href="test">CLICK ME</a>
