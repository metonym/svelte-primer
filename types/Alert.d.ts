/// <reference types="svelte" />

export interface AlertProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * @default false
   */
  full?: boolean;

  /**
   * @default false
   */
  banner?: boolean;

  kind?: "success" | "warn" | "error";

  /**
   * @default false
   */
  dismissable?: boolean;
}

export default class Alert {
  $$prop_def: AlertProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "dismiss", cb: (event: CustomEvent<any>) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
