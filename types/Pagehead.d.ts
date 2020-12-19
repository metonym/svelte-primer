/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PageheadProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {}

export default class Pagehead extends SvelteComponentTyped<
  PageheadProps,
  {},
  { default: {}; actions: { props: { class: "pagehead-actions" } } }
> {}
