# Avatar

> [Source code](../src/Avatar)

## Import

```js
import { Avatar } from "svelte-primer";
```

## Usage

```jsx
<Avatar alt="jonrohan" src="https://github.com/jonrohan.png" />
```

## API

### Props

| Name   | Type      | Default |
| :----- | :-------- | :------ |
| small  | `boolean` | `false` |
| parent | `boolean` | `false` |
| child  | `boolean` | `false` |
| width  | `number`  | `72`    |
| height | `number`  | `72`    |

`$$restProps` are passed to the `img` element.

### Slots

None

### Forwarded Events

None.

### Dispatched Events

None

### Component Signature

```jsx
<Avatar
  small={Boolean}
  parent={Boolean}
  child={Boolean}
  width={Number}
  height={Number}
/>
```
