# Autocomplete

> [Source code](../src/Autocomplete)

## Usage

```html
<script>
  import { Autocomplete } from "svelte-primer";
</script>

<Autocomplete.Autocomplete aria-label="Search" placeholder="Search">
  <Autocomplete.Item selected>Option 1</Autocomplete.Item>
  <Autocomplete.Item>Option 2</Autocomplete.Item>
  <Autocomplete.Item>Option 3</Autocomplete.Item>
</Autocomplete.Autocomplete>
```

## API

### `Autocomplete.Autocomplete`

#### Props

| Name  | Type     | Default |
| :---- | :------- | :------ |
| value | `string` | `""`    |

`$$restProps` are passed to the `input` element.

#### Slots

| Name    | Default     |
| :------ | :---------- |
| default | `undefined` |

#### Forwarded Events

- on:input
- on:change
- on:focus
- on:blur
- on:keydown
- on:keyup

#### Dispatched Events

None.

#### Component Signature

```jsx
<Autocomplete.Autocomplete bind:value={""}>
  <slot />
</Autocomplete.Autocomplete>
```

### `Autocomplete.Item`

#### Props

| Name     | Type      | Default |
| :------- | :-------- | :------ |
| selected | `boolean` | `false` |

`$$restProps` are passed to the top-level `li` element.

#### Slots

| Name    | Default     |
| :------ | :---------- |
| default | `undefined` |

#### Forwarded Events

- on:click

#### Dispatched Events

None.

#### Component Signature

```jsx
<Autocomplete.Item {selected}>
  <slot />
</Autocomplete.Item>
```
