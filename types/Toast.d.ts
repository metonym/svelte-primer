/// <reference types="svelte" />

export interface ToastProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  kind?: "success" | "warning" | "error";

  /**
   * @default false
   */
  loading?: boolean;

  /**
   * @default false
   */
  dismissable?: boolean;
}

export default class Toast {
  $$prop_def: ToastProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "dismiss", cb: (event: CustomEvent<any>) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
