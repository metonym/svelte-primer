# Tooltip

> [Source code](../src/Tooltip.svelte)

## Import

```js
import { Tooltip } from "svelte-primer";
```

## Usage

```jsx
<Tooltip text="This is the tooltip text." direction="se">
  Hover over me
</Tooltip>
```

## API

### Props

| Name        | Type                                                                                                 | Default        |
| :---------- | :--------------------------------------------------------------------------------------------------- | :------------- |
| text        | `string`                                                                                             | "Tooltip text" |
| direction   | `"n"` &#124; `"ne"` &#124; `"e"` &#124; `"se"` &#124; `"s"` &#124; `"sw"` &#124; `"w"` &#124; `"nw"` | "n"            |
| align       | `"left"` &#124; `"right"`                                                                            | `undefined`    |
| alignIndent | `1` &#124; `2`                                                                                       | `1`            |
| noDelay     | `boolean`                                                                                            | `false`        |
| multiline   | `boolean`                                                                                            | `false`        |

`$$restProps` are passed to the top-level `span` element.

### Slots

| Name    | Default     |
| :------ | :---------- |
| default | `undefined` |

### Forwarded Events

None.

### Dispatched Events

None.

### Component Signature

```jsx
<Tooltip
  text={String}
  direction={"n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "nw"}
  align={undefined | "left" | "right"}
  alignIndent={1 | 2}
  noDelay={Boolean}
  multiline={Boolean}
>
  <slot />
</Tooltip>
```
