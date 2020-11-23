/// <reference types="svelte" />

export interface BreadcrumbProps {}

export default class Breadcrumb {
  $$prop_def: BreadcrumbProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
