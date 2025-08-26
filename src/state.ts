import type { Component } from "svelte";
import { SvelteMap } from "svelte/reactivity";
import { writable } from "svelte/store";

export const applicationsState = new SvelteMap<string, {
  isMinimized: boolean;
  content: Component<any>;
}>();

export const focusedApp = writable<string | null>(null);
export const isMoving = writable<string | null>(null);
