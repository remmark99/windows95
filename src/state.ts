import { SvelteMap } from "svelte/reactivity";
import { writable } from "svelte/store";

interface ApplicationState {
  isMinimized: boolean;
}

export const applicationsState = new SvelteMap<string, ApplicationState>();

export const focusedApp = writable<string | null>(null);
export const isMoving = writable<string | null>(null);
