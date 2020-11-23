/// <reference types="svelte" />

export interface FormProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["form"]> {}

export default class Form {
  $$prop_def: FormProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "submit", cb: (event: WindowEventMap["submit"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
