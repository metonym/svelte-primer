# svelte-primer

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Svelte implementation of the GitHub Primer design system.

This component library implements [Primer CSS components](https://primer.style/css/components).

```svelte
<script>
  import { Button, ButtonMarketing, Dropdown } from "svelte-primer";
</script>

 <Button variant="octicon" close />

 <Dropdown.Dropdown title="Dropdown menu" dark>
  <Dropdown.Header>Header</Dropdown.Header>
  <Dropdown.Item>one</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item>two</Dropdown.Item>
</Dropdown.Dropdown>

<ButtonMarketing large>Default</ButtonMarketing>
```

[Documentation](docs)

## Not supported

- [Popover directions](https://primer.style/css/components/popover)

- [Navigation Search filter context](https://primer.style/css/components/navigation#filter-list)

- [Autocomplete Suggester](https://primer.style/css/components/autocomplete#suggester): use the [text-expander-element](https://github.com/github/text-expander-element)

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-primer.svg?color=orange
[npm-url]: https://npmjs.com/package/svelte-primer
[build]: https://travis-ci.com/metonym/svelte-primer.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-primer
