/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FormProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["form"]> {}

export default class Form extends SvelteComponentTyped<
  FormProps,
  { submit: WindowEventMap["submit"] },
  { default: {} }
> {}
