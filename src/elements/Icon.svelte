<script lang="ts">
    import type * as SUI from "../lib/SUI";

    /**
     * Color of the icon.
     */
    export let color: SUI.Colors | "" = "";
    /**
     * Show that the icon is inactive.
     */
    export let disabled = false;
    /**
     * Name of the icon.
     */
    export let name: string;
    /**
     * Size of the icon.
     */
    export let size: "mini" | "tiny" | "small" | "" | "large" | "big" | "huge" | "massive" = "";
</script>

<i class="ui icon {[color, disabled, name, size].join(' ')}" />
