/// <reference types="svelte" />

export interface PaginationProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["nav"]> {}

export default class Pagination {
  $$prop_def: PaginationProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
