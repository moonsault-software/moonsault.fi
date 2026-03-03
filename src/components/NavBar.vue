<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
    <nav class="navbar">
        <div class="container">
            <RouterLink to="/" class="brand">
                <img src="/favicon.svg" alt="" class="logo" />
                <span>Moonsault Software</span>
            </RouterLink>

            <button
                class="toggle"
                @click="isOpen = !isOpen"
                :aria-expanded="isOpen"
                aria-label="Toggle navigation">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>

            <ul class="nav" :class="{ open: isOpen }">
                <li>
                    <RouterLink
                        to="/"
                        @click="isOpen = false"
                        active-class="active"
                        :class="{ active: $route.name === 'home' }">
                        Home
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/blog" @click="isOpen = false" active-class="active">
                        Blog
                    </RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--space-lg);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.brand {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    color: var(--color-white);
    font-weight: 700;
    font-size: 1.1rem;

    &:hover {
        color: var(--color-gold-light);
    }

    .logo {
        width: 32px;
        height: 32px;
        filter: invert(1);
    }
}

.nav {
    display: flex;
    list-style: none;
    gap: var(--space-lg);

    a {
        color: var(--color-light-gray);
        font-weight: 500;
        padding: var(--space-xs) 0;
        border-bottom: 2px solid transparent;
        transition:
            color var(--transition-fast),
            border-color var(--transition-fast);

        &:hover,
        &.active {
            color: var(--color-gold-light);
            border-bottom-color: var(--color-gold);
        }
    }
}

.toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--space-sm);

    .bar {
        display: block;
        width: 24px;
        height: 2px;
        background: var(--color-gold);
        border-radius: 1px;
        transition:
            transform var(--transition-fast),
            opacity var(--transition-fast);
    }
}

@media (max-width: 640px) {
    .toggle {
        display: flex;
    }

    .nav {
        display: none;
        position: absolute;
        top: var(--navbar-height);
        left: 0;
        right: 0;
        flex-direction: column;
        background: #16213e;
        padding: var(--space-md) var(--space-lg);
        gap: var(--space-sm);
        border-bottom: 2px solid var(--color-gold-dark);

        &.open {
            display: flex;
        }

        a {
            padding: var(--space-sm) 0;
        }
    }
}
</style>
