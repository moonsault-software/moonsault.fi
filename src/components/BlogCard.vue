<script setup lang="ts">
import { computed } from 'vue'
import type { BlogPost } from '@/composables/usePosts'

const props = defineProps<{
    post: BlogPost
}>()

const formattedDate = computed(() => {
    return new Date(props.post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
})
</script>
<template>
    <article class="blog-card">
        <time class="date" :datetime="post.date">{{ formattedDate }}</time>
        <h2 class="title">
            <RouterLink :to="{ name: 'blog-post', params: { slug: post.slug } }">
                {{ post.title }}
            </RouterLink>
        </h2>
        <p class="excerpt">{{ post.excerpt }}</p>
        <RouterLink :to="{ name: 'blog-post', params: { slug: post.slug } }" class="link">
            Read more &rarr;
        </RouterLink>
    </article>
</template>

<style scoped>
.date {
    display: block;
    font-size: 0.85rem;
    color: var(--color-gray);
    margin-bottom: var(--space-xs);
}

.title {
    font-size: 1.4rem;
    margin-bottom: var(--space-sm);

    a {
        color: var(--color-black);
        transition: color var(--transition-fast);

        &:hover {
            color: var(--color-gold-dark);
        }
    }
}

.excerpt {
    color: var(--color-dark-gray);
    margin-bottom: var(--space-md);
    line-height: 1.6;
}

.link {
    font-weight: 600;
    font-size: 0.9rem;
}
</style>
