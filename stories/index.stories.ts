import { storiesOf } from "@storybook/svelte";

import DividerView from "./elements/DividerView.svelte";
import HeaderView from "./elements/HeaderView.svelte";

const story = (Component) => () => ({
    Component,
});

storiesOf("Elements", module).add("Divider", story(DividerView)).add("Header", story(HeaderView));
