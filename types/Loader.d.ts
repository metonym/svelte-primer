/// <reference types="svelte" />

export interface LoaderProps {}

export default class Loader {
  $$prop_def: LoaderProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
