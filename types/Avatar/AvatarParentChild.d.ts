/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AvatarParentChildProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {}

export default class AvatarParentChild extends SvelteComponentTyped<
  AvatarParentChildProps,
  {},
  { default: {} }
> {}
