<script lang="ts">
    import { slide } from "svelte/transition";

    export let source;
    /**
     * Control the height in pixels of the component view.
    */
    export let viewHeight = -1;

    let showCode = false;
</script>

<style>
    pre {
        margin: 0;
    }

    .show-code-icon {
        float: right;
    }

    .ui.component.segment {
        padding-bottom: 0;
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
        <div class="ui segment" transition:slide>
            <pre>
                {source}
            </pre>
        </div>
    {/if}
</div>
