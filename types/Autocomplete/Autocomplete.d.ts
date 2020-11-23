/// <reference types="svelte" />

export interface AutocompleteProps {
  /**
   * @default ""
   */
  value?: string;
}

export default class Autocomplete {
  $$prop_def: AutocompleteProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "input", cb: (event: WindowEventMap["input"]) => void): () => void;
  $on(eventname: "change", cb: (event: WindowEventMap["change"]) => void): () => void;
  $on(eventname: "focus", cb: (event: WindowEventMap["focus"]) => void): () => void;
  $on(eventname: "blur", cb: (event: WindowEventMap["blur"]) => void): () => void;
  $on(eventname: "keydown", cb: (event: WindowEventMap["keydown"]) => void): () => void;
  $on(eventname: "keyup", cb: (event: WindowEventMap["keyup"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
