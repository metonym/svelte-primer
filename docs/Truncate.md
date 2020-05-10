# Truncate

> [Source code](../src/Truncate.svelte)

## Import

```js
import { Truncate } from "svelte-primer";
```

## Usage

```js
<Truncate title="branch-name-that-is-really-long">
  branch-name-that-is-really-long
</Truncate>
```

## API

### Props

| Name  | Type      | Default |
| :---- | :-------- | :------ |
| fixed | `boolean` | `false` |

### `$$restProps`

Forwarded to the top-level `div` element.

### Slots

| Name    | Default     |
| :------ | :---------- |
| default | `undefined` |

### Forwarded Events

None.

## Kitchen Sink Shorthand Notation

```jsx
<Truncate fixed={true}>{/* <slot /> */}</Truncate>
```
