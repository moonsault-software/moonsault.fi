<script setup lang="ts">
import { usePosts } from '@/composables/usePosts'
import BlogCard from '@/components/BlogCard.vue'

const { posts } = usePosts()
</script>

<template>
    <main class="list">
        <section class="container">
            <div class="grid">
                <BlogCard v-for="post in posts" :key="post.slug" :post="post" />
            </div>
            <p v-if="posts.length === 0" class="empty">No posts yet. Check back soon!</p>
        </section>
    </main>
</template>

<style scoped>
.list {
    padding: var(--space-xl) 0;

    .container {
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 0 var(--space-lg);
    }

    .empty {
        color: var(--color-gray);
        text-align: center;
        padding: var(--space-2xl) 0;
        font-size: 1.1rem;
    }
}
</style>
