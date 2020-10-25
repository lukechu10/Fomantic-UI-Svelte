<script lang="ts">
    /** Divider can segment content vertically. */
    export let vertical = false;
    /** Divider can segment content horizontally. */
    export let horizontal = false;
    /** Text used as seperator inside divider. */
    export let text = "";
</script>

<div class="ui divider" class:horizontal class:vertical>{text}</div>
