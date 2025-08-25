import type { SvelteComponent } from "svelte";
import { SvelteMap } from "svelte/reactivity";
import { writable } from "svelte/store";

export const applicationsState = new SvelteMap<string, {
  isFocused: boolean;
  isMinimized: boolean;
  content: SvelteComponent;
}>();
applicationsState.set('test', { 
isFocused: true, isMinimized: true, content: "test"})

export const isMoving = writable<string | null>(null);
