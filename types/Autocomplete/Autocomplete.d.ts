/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AutocompleteProps {
  /**
   * @default ""
   */
  value?: string;
}

export default class Autocomplete extends SvelteComponentTyped<
  AutocompleteProps,
  {
    input: WindowEventMap["input"];
    change: WindowEventMap["change"];
    focus: WindowEventMap["focus"];
    blur: WindowEventMap["blur"];
    keydown: WindowEventMap["keydown"];
    keyup: WindowEventMap["keyup"];
  },
  { default: {} }
> {}
