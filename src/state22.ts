import type { Component } from "svelte";
import { SvelteMap } from "svelte/reactivity";
import Button from "./components/Button.svelte";

export const test = new SvelteMap<number, { text: string, component: Component<any> }>();
test.set(3, { text: "haha", component: Button });
