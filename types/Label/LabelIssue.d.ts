/// <reference types="svelte" />

export interface LabelIssueProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["span"]> {
  /**
   * @default "Label: title"
   */
  title?: string;

  /**
   * @default "blue"
   */
  color?: "blue" | "green" | "red" | string;
}

export default class LabelIssue {
  $$prop_def: LabelIssueProps;
  $$slot_def: {
    default: {};
  };

  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
