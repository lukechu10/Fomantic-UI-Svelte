<script lang="ts">
    export let size: "huge" | "large" | "medium" | "small" | "tiny";
</script>

<div class="ui {size} header">
    <slot />
</div>
