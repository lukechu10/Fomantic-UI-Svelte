<script lang="ts">
    import { slide } from "svelte/transition";
    import { Highlight } from "svelte-highlight";
    import { xml } from "svelte-highlight/languages/index";
    import "svelte-highlight/styles/atom-one-dark.css";

    export let source: string = "";
    /**
     * Control the height in pixels of the component view.
     */
    export let viewHeight = -1;

    let showCode = false;
</script>

<style>
    .show-code-icon {
        float: right;
    }

    .ui.component.segment {
        padding-bottom: 0;
    }

    .ui.code.segment {
        padding: 5px;
        margin: 0;
        background-color: #282c34; /* color in atom-one-dark theme */
        border: 1px #282c34 solid;
    }

    :global(.ui.code.segment pre.hljs) {
        margin: 0;
    }
</style>

<div class="ui segments">
    <div class="ui component segment" style="height: {viewHeight !== -1 ? viewHeight : 'auto'}px">
        <div class="ui top attached label">
            Example
            <i
                class="show-code-icon"
                data-tooltip="Show code"
                data-position="top right"
                data-variation="tiny basic"
                data-inverted
                on:click={() => (showCode = !showCode)}
            ><i class="fitted code icon" /></i>
        </div>
        <div class="component">
            <slot />
        </div>
    </div>

    {#if showCode}
        <div class="ui code segment" transition:slide>
            <Highlight language="{xml}" code={source || 'No code availiable. Create a PR and contribute it now!'} />
        </div>
    {/if}
</div>
