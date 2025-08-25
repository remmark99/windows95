import { SvelteMap } from "svelte/reactivity";

export const applicationsState = new SvelteMap<string, {
  isFocused: boolean;
  isMinimized: boolean;
}>();
