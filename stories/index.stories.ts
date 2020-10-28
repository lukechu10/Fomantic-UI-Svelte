import { storiesOf } from "@storybook/svelte";

import Divider from "./elements/Divider/Index.svelte";

const story = (Component) => () => ({
    Component,
});

storiesOf("Elements", module).add("Divider", story(Divider));
