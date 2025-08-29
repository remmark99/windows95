<script lang="ts">
	import clippy from 'clippyts';
	import { onMount } from 'svelte';

	onMount(() => {
		clippy.load({
			selector: 'Merlin',
			name: 'Merlin',
			successCb: (agent) => {
				// agent.show(false);
				// document.getElementsByClassName('clippy')[0].removeAttribute('hidden');
				// agent.speak('something funny', false);
				//     agent.play("Suggest", 2000);
				// agent.play('Hide', 0, () => agent.hide(true, () => {}));
			}
		});
	});
</script>
