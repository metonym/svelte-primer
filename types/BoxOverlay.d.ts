/// <reference types="svelte" />

export interface BoxOverlayProps {
  /**
   * @default "Open dialog"
   */
  summary?: string;

  size?: "narrow" | "wide";

  /**
   * @default false
   */
  open?: boolean;

  /**
   * @default false
   */
  transparentOverlay?: boolean;
}

export default class BoxOverlay {
  $$prop_def: BoxOverlayProps;
  $$slot_def: {
    default: {};
    footer: { props: { class: "Box-footer" } };
  };

  $on(eventname: string, cb: (event: Event) => void): () => void;
}
