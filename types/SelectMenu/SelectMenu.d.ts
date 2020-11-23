/// <reference types="svelte" />

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

export default class SelectMenu {
  $$prop_def: SelectMenuProps;
  $$slot_def: {
    default: {};
    filter: {};
    tabs: {};
    title: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
