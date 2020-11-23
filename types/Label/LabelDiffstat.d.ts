/// <reference types="svelte" />

export interface LabelDiffstatProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["span"]> {
  /**
   * @default 3
   */
  added?: number;

  /**
   * @default 1
   */
  deleted?: number;

  /**
   * @default 1
   */
  neutral?: number;

  /**
   * @default "Diffstat title"
   */
  title?: string;
}

export default class LabelDiffstat {
  $$prop_def: LabelDiffstatProps;
  $$slot_def: {
    added: {};
    deleted: {};
    size: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
