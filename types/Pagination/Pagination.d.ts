/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PaginationProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["nav"]> {}

export default class Pagination extends SvelteComponentTyped<
  PaginationProps,
  {},
  { default: {} }
> {}
