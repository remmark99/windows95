import { SvelteMap } from "svelte/reactivity";
import { writable } from "svelte/store";

export const applicationsState = new SvelteMap<string, {
  isFocused: boolean;
  isMinimized: boolean;
}>();

export const isMoving = writable<string | null>(null);
