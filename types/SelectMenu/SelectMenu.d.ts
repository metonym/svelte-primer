/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SelectMenuProps {
  /**
   * @default "Select menu"
   */
  summary?: string;

  /**
   * @default "Title"
   */
  title?: string;

  /**
   * @default false
   */
  open?: boolean;

  /**
   * @default "left"
   */
  align?: "left" | "right";
}

export default class SelectMenu extends SvelteComponentTyped<
  SelectMenuProps,
  {},
  { default: {}; filter: {}; tabs: {}; title: {} }
> {}
