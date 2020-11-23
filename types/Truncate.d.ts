/// <reference types="svelte" />

export interface TruncateProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default false
   */
  fixed?: boolean;
}

export default class Truncate {
  $$prop_def: TruncateProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
