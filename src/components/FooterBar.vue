<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
    <footer class="footer">
        <div class="footer-ropes">
            <span class="rope"></span>
            <span class="rope"></span>
            <span class="rope"></span>
        </div>
        <div class="content">
            <div class="links">
                <a href="mailto:contact@moonsault.fi">contact@moonsault.fi</a>
                <span class="sep">&middot;</span>
                <a
                    href="https://github.com/moonsault-software"
                    target="_blank"
                    rel="noopener noreferrer"
                    >GitHub</a
                >
                <span class="sep">&middot;</span>
                <a
                    href="https://linkedin.com/company/moonsault"
                    target="_blank"
                    rel="noopener noreferrer"
                    >LinkedIn</a
                >
                <span class="sep">&middot;</span>
                <a
                    href="https://bsky.app/profile/moonsault.fi"
                    target="_blank"
                    rel="noopener noreferrer"
                    >BlueSky</a
                >
            </div>
            <p class="copyright">&copy; {{ currentYear }} Moonsault Software Oy</p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    margin-top: auto;
    background: rgba(255, 255, 255, 0.15);

    .content {
        max-width: var(--max-width);
        margin: 0 auto;
        padding: var(--space-lg);
        text-align: center;
    }

    .links {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--space-sm);
        margin-bottom: var(--space-md);
        flex-wrap: wrap;

        a {
            color: var(--color-gray);
            font-size: 0.9rem;
            transition: color var(--transition-fast);

            &:hover {
                color: var(--color-gold);
            }
        }
    }

    .sep {
        color: var(--color-light-gray);
    }

    .copyright {
        color: var(--color-gray);
        font-size: 0.85rem;
    }
}
</style>
