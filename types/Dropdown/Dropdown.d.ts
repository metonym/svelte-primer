/// <reference types="svelte" />

export interface DropdownProps {
  /**
   * @default "Dropdown"
   */
  title?: string;

  /**
   * @default "se"
   */
  direction?: "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "nw";

  /**
   * @default false
   */
  dark?: boolean;
}

export default class Dropdown {
  $$prop_def: DropdownProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
