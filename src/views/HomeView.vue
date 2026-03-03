<script setup lang="ts">
import logoUrl from '@/assets/logo_with_text.svg'
</script>

<template>
    <div class="home">
        <section class="hero">
            <div class="content">
                <img :src="logoUrl" alt="Moonsault Software Oy" class="logo" />
                <p class="tagline">Software and Games Consulting &amp; Contracting</p>
            </div>
        </section>
    </div>
</template>

<style scoped>
.home {
    flex: 1;
    display: flex;
    flex-direction: column;

    .content {
        text-align: center;
        padding: var(--space-lg);
    }

    .logo {
        width: 100%;
        max-width: 500px;
        height: auto;
        margin-bottom: var(--space-xl);
    }

    .tagline {
        font-size: 1.3rem;
        color: var(--color-gray);
        font-weight: 300;
        letter-spacing: 0.05em;
    }

    @media (max-width: 640px) {
        .logo {
            max-width: 300px;
        }

        .tagline {
            font-size: 1rem;
        }
    }
}
</style>
