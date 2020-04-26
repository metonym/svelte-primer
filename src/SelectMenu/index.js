import SelectMenuBlankSlate from "./SelectMenuBlankSlate.svelte";
import SelectMenuDivider from "./SelectMenuDivider.svelte";
import SelectMenuFilter from "./SelectMenuFilter.svelte";
import SelectMenuFooter from "./SelectMenuFooter.svelte";
import SelectMenuItem from "./SelectMenuItem.svelte";
import SelectMenuLoading from "./SelectMenuLoading.svelte";
import SelectMenuMessage from "./SelectMenuMessage.svelte";
import SelectMenuSelectMenu from "./SelectMenu.svelte";
import SelectMenuTab from "./SelectMenuTab.svelte";
import SelectMenuTabs from "./SelectMenuTabs.svelte";
import SelectMenuTitle from "./SelectMenuTitle.svelte";

const SelectMenu = {
  BlankSlate: SelectMenuBlankSlate,
  Divider: SelectMenuDivider,
  Filter: SelectMenuFilter,
  Footer: SelectMenuFooter,
  Item: SelectMenuItem,
  Loading: SelectMenuLoading,
  Message: SelectMenuMessage,
  SelectMenu: SelectMenuSelectMenu,
  Tab: SelectMenuTab,
  Tabs: SelectMenuTabs,
  Title: SelectMenuTitle,
};

export default SelectMenu;
