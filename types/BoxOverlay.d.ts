/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

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

export default class BoxOverlay extends SvelteComponentTyped<
  BoxOverlayProps,
  {},
  { default: {}; footer: { props: { class: "Box-footer" } } }
> {}
