import { storiesOf } from "@storybook/svelte";

import DividerView from "./elements/DividerView.svelte";
import HeaderView from "./elements/HeaderView.svelte";
import IconView from "./elements/IconView.svelte";

const story = (Component) => () => ({
    Component,
});

storiesOf("Fomantic-UI-Svelte/Elements", module)
    .add("Divider", story(DividerView))
    .add("Header", story(HeaderView))
    .add("Icon", story(IconView));
