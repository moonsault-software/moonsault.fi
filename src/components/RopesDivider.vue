<script setup lang="ts">
withDefaults(
    defineProps<{
        variant?: 'default' | 'gold' | 'subtle'
    }>(),
    {
        variant: 'default',
    }
)
</script>

<template>
    <div class="ropes-divider" :class="[`ropes-${variant}`]">
        <span class="rope"></span>
        <span class="rope"></span>
        <span class="rope"></span>
    </div>
</template>
