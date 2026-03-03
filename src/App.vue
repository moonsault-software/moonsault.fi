<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
</script>

<template>
    <div class="app">
        <NavBar />
        <main class="content">
            <RouterView />
        </main>
        <FooterBar />
    </div>
</template>

<style scoped>
.app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        background: radial-gradient(
            ellipse at center top,
            var(--color-white) 0%,
            #ede9e0 40%,
            #ddd6c8 75%,
            #cfc6b4 100%
        );
    }
}
</style>
