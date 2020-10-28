<script lang="ts">
    import Divider from "../../src/elements/Divider.svelte";
    import Example from "../Example.svelte";
</script>

<h1>Divider</h1>

<h2>Types</h2>

<h3>Divider</h3>
A standard divider
<Example source="<Divider />">
    <Divider />
</Example>

<h3>Vertical Divider</h3>
A divider can segment content vertically.
<Example source="<Divider vertical text='And' />" viewHeight={200}>
    <Divider vertical text="And" />
</Example>

<h3>Horizontal Divider</h3>
A divider can segement content horizontally.
<div class="ui info message">
    Dividers will automatically vary the size of their dividing rules to match the length of your
    text.
</div>
<Example source="<Divider horizontal text='Or' />">
    <Divider horizontal text="Or" />
</Example>
