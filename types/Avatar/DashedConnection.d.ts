/// <reference types="svelte" />

export interface DashedConnectionProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default "Title"
   */
  title?: string;
}

export default class DashedConnection {
  $$prop_def: DashedConnectionProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
