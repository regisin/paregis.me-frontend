import { writable, readable } from "svelte/store";

export const dark = writable(false);
export const hero = writable(null);