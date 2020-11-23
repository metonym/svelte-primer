/// <reference types="svelte" />

export interface PageheadProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {}

export default class Pagehead {
  $$prop_def: PageheadProps;
  $$slot_def: {
    default: {};
    actions: { props: { class: "pagehead-actions" } };
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
