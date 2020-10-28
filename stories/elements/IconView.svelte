<script>
    import Icon from "../../src/elements/Icon.svelte";
    import Example from "../Example.svelte";
</script>

<h1>Icon</h1>

An icon set contains an arbitrary number of glyphs

<h2>Icon Set</h2>
Refer to
<a href="https://fomantic-ui.com/elements/icon.html">https://fomantic-ui.com/elements/icon.html</a>
for a full list of icons.

<div class="ui ignored message">
    Semantic includes a complete port of
    <a href="https://fontawesome.com/" target="_blank">Font Awesome 5.13.0</a>
    designed by the
    <a href="https://twitter.com/fontawesome">FontAwesome</a>
    team for its standard icon set.
</div>

<Example source="<Icon name='github' />
<Icon name='home' />">
    <div class="ui doubling five column grid">
        <div class="column">
            <Icon name="github" size="big" />
            github
        </div>
        <div class="column">
            <Icon name="home" size="big" />
            home
        </div>
    </div>
</Example>
