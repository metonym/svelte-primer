<script>
  import { goto } from "@sapper/app";
  import snapshot from "../../../.size-snapshot.json";
  import prettyBytes from "pretty-bytes";
  import {
    Alert,
    Autocomplete,
    Avatar,
    AvatarParentChild,
    AvatarStack,
    Blankslate,
    Box,
    BoxOverlay,
    BranchName,
    Breadcrumb,
    Button,
    ButtonMarketing,
    ButtonWithCount,
    CircleBadge,
    DashedConnection,
    Dropdown,
    Form,
    Header,
    Label,
    LabelCounter,
    LabelDiffstat,
    LabelIssue,
    LabelState,
    Loader,
    Navigation,
    Pagination,
    Popover,
    SelectMenu,
    Subhead,
    Timeline,
    Toast,
    Tooltip,
    Truncate
  } from "svelte-primer";
  import {
    MarkGithub,
    Pencil,
    Tools,
    Eye,
    Flame,
    GitCommit
  } from "svelte-octicons";

  export let copy = async () => {
    await navigator.clipboard.writeText("<empty clipboard>");
  };

  let open = false;
  let large = false;
  let value = "";
  let radioGroupValue = undefined;
  let selectValue = "Git";

  console.log("gzip", prettyBytes(snapshot["lib/index.mjs"].gzipped));
</script>

<svelte:head>
  <title>svelte-primer</title>
</svelte:head>

<div class="markdown-body">
  <h1>svelte-primer</h1>
  <p>Svelte implementation of the GitHub Primer design system</p>
</div>

<!--
<Blankslate size="spacious">
  <h3 class="mb-1">svelte-primer</h3>
  <p>Svelte implementation of the GitHub Primer design system</p>
  <Button
    kind="primary"
    class="my-3"
    on:click={() => {
      goto('components/');
    }}>
    Get started
  </Button>
  <p>
    <Button
      variant="link-button"
      href="https://github.com/metonym/svelte-primer">
      View on GitHub
    </Button>
  </p>
</Blankslate>


<Header.Header>
  <Header.Item>
    <Header.Link href="components/" class="f4 d-flex flex-items-center">
      <MarkGithub width={32} height={32} class="mr-2" />
      <span>GitHub</span>
    </Header.Link>
  </Header.Item>
  <Header.Item>
    <input type="search" class="form-control input-dark" />
  </Header.Item>
  <Header.Item full>Menu</Header.Item>
  <Header.Item class="mr-0" />
  <div class="Header-item mr-0">
    <Avatar
      small
      alt="jonrohan"
      src="https://github.com/jonrohan.png?v=3&s=64"
      width="20"
      height="20" />
  </div>
</Header.Header>

<Pagination.Pagination>
  <Pagination.Button kind="previous" />
  <Pagination.Button
    kind="next"
    on:click={() => {
      copy();
    }} />
</Pagination.Pagination>

<Pagination.Pagination>
  <Pagination.Button kind="previous" disabled />
  <em aria-current="page">1</em>
  <a href="#url" aria-label="Page 2">2</a>
  <span class="gap">…</span>
  <a href="#url" aria-label="Page 9">9</a>
  <a href="#url" aria-label="Page 10">10</a>
  <Pagination.Button kind="next" />
</Pagination.Pagination>

<Form.Form>
  <Form.Checkbox type="radio" label="Not available for hire" name="hireme" />
  <Form.Checkbox child type="radio" label="Available for hire" name="hireme">
    <span class="d-block mb-1">Available hours per week</span>
    <input type="text" name="" class="form-control input-contrast" size="3" />
    <span class="text-small text-gray pl-2">hours per week</span>
  </Form.Checkbox>
</Form.Form>

<BranchName>a_new_feature_branch</BranchName>
<BranchName href="/">a_new_feature_branch</BranchName>

<Form.RadioGroup
  bind:value={radioGroupValue}
  options={[{ value: 'Option A' }, { value: 'Option B' }, { value: 'Option C' }]} />
{radioGroupValue}
<Form.Group
  label="Example text"
  validation="error"
  validationText="Success"
  let:props>
  <Form.Input {...props} placeholder="Type something..." />
</Form.Group>

<Form.InputGroup>
  <Form.Input />
  <div slot="button">
    <Button aria-label="Copy to clipboard">
      <Tools />
    </Button>
  </div>
</Form.InputGroup>

<Autocomplete.Autocomplete
  aria-label="Search by user"
  placeholder="Search by user">
  <Autocomplete.Item selected>GitHub Inc</Autocomplete.Item>
  <Autocomplete.Item>Hubot</Autocomplete.Item>
  <Autocomplete.Item>Monalisa Octocat</Autocomplete.Item>
</Autocomplete.Autocomplete>

<Form.Select
  bind:value={selectValue}
  options={[{ value: 'Choose an option' }, { value: 'Git' }, { value: 'Subversion' }]} />
{selectValue}
<div
  on:click={() => {
    selectValue = 'Choose an option';
  }}>
  Reset selectValue
</div>
<Box.Box theme="blue">
  <Box.Header>
    <Box.Title>Box title</Box.Title>
  </Box.Header>
  <Alert full kind="success" dismissable>Success message</Alert>
  <Box.Body>
    <strong class="pr-2">Box body</strong>
    <Box.IconButton
      on:click={() => {
        console.log('click');
      }}>
      <Pencil />
    </Box.IconButton>
  </Box.Body>
  <Box.Rows>
    <Box.Row unread>Box row one</Box.Row>
    <Box.Row theme="hover-blue">Box row two (hover-blue)</Box.Row>
    <Box.Row>
      Box row three
      <Box.RowLink href="/">Box row link</Box.RowLink>
    </Box.Row>
  </Box.Rows>
  <Box.Footer>Box footer</Box.Footer>
</Box.Box>

<div class="position-relative text-center">
  <Button
    kind="primary"
    on:click={() => {
      open = !open;
    }}>
    Toggle popover
  </Button>
  <Popover.Popover {open} class="right-0 left-0 position-relative">
    <Popover.Message>
      <h4 class="mb-2">Popover heading</h4>
      <p>Message about this particular piece of UI.</p>
      <Button type="submit" kind="outline" class="mt-2 text-bold">
        Got it!
      </Button>
    </Popover.Message>
  </Popover.Popover>
</div>

<Timeline.Item>
  <div slot="badge">
    <Timeline.Badge href="#heading-1">
      <Flame />
    </Timeline.Badge>
  </div>
  <a href="/" class="text-bold link-gray-dark mr-1">Monalisa</a>
  created one
  <a href="/" class="text-bold link-gray-dark">hot potato</a>
  <a href="/" class="link-gray">Just now</a>
</Timeline.Item>
<Timeline.Item>
  <div slot="avatar">
    <Timeline.Avatar>
      <Avatar
        height={40}
        width={40}
        alt="jonrohan"
        src="https://github.com/jonrohan.png?v=3&s=96" />
    </Timeline.Avatar>
  </div>
  <div slot="badge">
    <Timeline.Badge>
      <Flame />
    </Timeline.Badge>
  </div>
  <a href="/" class="text-bold link-gray-dark mr-1">Monalisa</a>
  created one
  <a href="/" class="text-bold link-gray-dark">hot potato</a>
  <a href="/" class="link-gray">Just now</a>
</Timeline.Item>
<Timeline.Item>
  <div slot="badge">
    <Timeline.Badge>
      <Flame />
    </Timeline.Badge>
  </div>
  <a href="/" class="text-bold link-gray-dark mr-1">Monalisa</a>
  created one
  <a href="/" class="text-bold link-gray-dark">hot potato</a>
  <a href="/" class="link-gray">Just now</a>
</Timeline.Item>
<Timeline.Item condensed>
  <div slot="badge">
    <Timeline.Badge>
      <GitCommit />
    </Timeline.Badge>
  </div>
  This is the message of a condensed TimelineItem
</Timeline.Item>

<Button
  on:click={() => {
    large = !large;
  }}>
  Toggle large variant
</Button>

<ButtonMarketing {large}>Default</ButtonMarketing>
<ButtonMarketing {large} kind="outline">Outline</ButtonMarketing>
<ButtonMarketing {large} kind="primary">Primary</ButtonMarketing>
<div class="bg-gray-dark">
  <ButtonMarketing {large} transparent>Transparent</ButtonMarketing>
</div>

<AvatarParentChild>
  <Avatar
    parent
    alt="jonrohan"
    src="https://github.com/jonrohan.png?v=3&s=96" />
  <Avatar child alt="josh" src="https://github.com/josh.png?v=3&s=40" />
</AvatarParentChild>

<AvatarStack>
  <Avatar alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=96" />
  <Avatar alt="jonrohan" src="https://github.com/jonrohan.png?v=3&s=96" />
</AvatarStack>

<Breadcrumb.Breadcrumb>
  <Breadcrumb.Item>One</Breadcrumb.Item>
  <Breadcrumb.Item>Two</Breadcrumb.Item>
  <Breadcrumb.Item current>Three</Breadcrumb.Item>
</Breadcrumb.Breadcrumb>

<Dropdown.Dropdown title="Dropdown menu" dark>
  <Dropdown.Header>Header</Dropdown.Header>
  <Dropdown.Item>one</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item>two</Dropdown.Item>
</Dropdown.Dropdown>

<DashedConnection>
  <li>
    <CircleBadge>1</CircleBadge>
  </li>
  <li>
    <CircleBadge>2</CircleBadge>
  </li>
</DashedConnection>
<BoxOverlay size="wide">1</BoxOverlay>
<div>
  <Label color="green">green outlined label</Label>
  <LabelIssue title="Label: good first issue" color="green">
    good first issue
  </LabelIssue>
  <LabelState />
  <LabelState status="open" />
  <LabelState status="closed" />
  <LabelState status="merged" />
  <LabelDiffstat added={2} deleted={2}>
    <span slot="size">6</span>
  </LabelDiffstat>
  <LabelDiffstat>
    17
    <span slot="added">+6</span>
    <span slot="deleted">-1</span>
  </LabelDiffstat>
</div>
<p>
  Some text.
  <Button variant="hidden-text" inline />
</p>

<ButtonWithCount href="#url" countHref="#url" count={5}>
  <Eye />
  <span>Watch</span>
</ButtonWithCount>

<Button variant="octicon" close />

<button class="btn-link" type="button">Link button</button>

<button class="btn btn-large btn-primary mr-2" type="button">
  Large button
</button>

<Avatar
  alt="jonrohan"
  src="https://github.com/jonrohan.png?v=3&s=144"
  width="72"
  height="72" />

<Avatar
  small
  alt="jonrohan"
  src="https://github.com/jonrohan.png?v=3&s=64"
  width="32"
  height="32" />

<Alert kind="success" dismissable>Content</Alert>

<Subhead danger>
  <div slot="heading" let:props {...props}>Subhead with button</div>
  <div slot="actions" let:props {...props}>
    <a href="#url">Learn more</a>
  </div>
</Subhead>

<Subhead>
  <div slot="heading" let:props {...props}>Subhead with button</div>
  <div slot="actions" let:props {...props}>
    <a href="#url" class="btn btn-sm btn-primary" role="button">Action</a>
  </div>
</Subhead>

<Toast kind="success" dismissable>Content</Toast>

<Loader />

<Label>Label 1</Label>

<Navigation.Menu>
  <span slot="heading" let:props {...props}>Menu heading</span>
  <Navigation.MenuItem current>Link 1</Navigation.MenuItem>
  <Navigation.MenuItem>
    <Tools />
    Link 2
  </Navigation.MenuItem>
</Navigation.Menu>

<Navigation.Underline align="right">
  <Navigation.UnderlineItem current>Link 1</Navigation.UnderlineItem>
  <Navigation.UnderlineItem>
    <Navigation.UnderlineOcticon octicon={Tools} />
    <span>Item 2</span>
    <LabelCounter>6</LabelCounter>
  </Navigation.UnderlineItem>
  <div slot="actions" let:props {...props}>
    <a class="btn" href="/">Button</a>
  </div>
</Navigation.Underline>

<Navigation.SideNav bordered>
  <Navigation.SideNavItem>Account</Navigation.SideNavItem>
  <Navigation.SideNavItem current>Profile</Navigation.SideNavItem>
  <Navigation.SideNav class="bg-white border-top py-3 pl-6">
    <Navigation.SideNavSubItem>Account</Navigation.SideNavSubItem>
  </Navigation.SideNav>
  <Navigation.SideNavItem>Emails</Navigation.SideNavItem>
</Navigation.SideNav>

<aside class="bg-gray-light border p-3" style="max-width: 360px">
  <h5 class="text-gray mb-2 pb-1 border-bottom">Menu</h5>
  <Navigation.SideNav>
    <Navigation.SideNavSubItem>Account</Navigation.SideNavSubItem>
    <Navigation.SideNavSubItem current>Profile</Navigation.SideNavSubItem>
  </Navigation.SideNav>
</aside>

<Navigation.TabNav>
  <div slot="extra" let:props {...props}>Tabnav widget text here.</div>
  <Navigation.TabNavItem current>Tab 1</Navigation.TabNavItem>
  <Navigation.TabNavItem>Tab 2</Navigation.TabNavItem>
</Navigation.TabNav>

<Navigation.FilterList>
  <Navigation.FilterListItem>First filter</Navigation.FilterListItem>
  <Navigation.FilterListItem current>
    Second filter
    <span class="count" title="results">3</span>
  </Navigation.FilterListItem>
  <Navigation.FilterListItem>Third filter</Navigation.FilterListItem>
</Navigation.FilterList>

<Navigation.SubNav search bind:value>
  <Navigation.SubNavItem current>One</Navigation.SubNavItem>
  <Navigation.SubNavItem>Two</Navigation.SubNavItem>
  <Navigation.SubNavItem>Three</Navigation.SubNavItem>
</Navigation.SubNav>
{value}
<LabelCounter>16</LabelCounter>

<Tooltip
  direction="nw"
  text="This is the tooltip with multiple lines. This is the tooltip with
  multiple lines."
  align="right"
  noDelay>
  Item
</Tooltip>

<SelectMenu.SelectMenu>
  <SelectMenu.Item>Item 1</SelectMenu.Item>
  <SelectMenu.Item>Item 2</SelectMenu.Item>
  <SelectMenu.Item>Item 3</SelectMenu.Item>
</SelectMenu.SelectMenu>

<div class="col-3">
  <Truncate title="branch-name-that-is-really-long" class="border p-3">
    branch-name-that-is-really-long
  </Truncate>
</div>

<div class="Subhead">
  <div class="Subhead-heading">Plain subhead</div>
</div>
 -->
