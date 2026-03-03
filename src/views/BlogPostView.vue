<script setup lang="ts">
import { computed } from 'vue'
import { usePosts } from '@/composables/usePosts'
import RopesDivider from '@/components/RopesDivider.vue'

const props = defineProps<{
    slug: string
}>()

const { getPost, renderPost } = usePosts()

const post = computed(() => getPost(props.slug))

const renderedContent = computed(() => {
    if (!post.value) return ''
    return renderPost(props.slug)
})

const formattedDate = computed(() => {
    if (!post.value) return ''
    return new Date(post.value.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
})
</script>

<template>
    <div class="post">
        <article v-if="post" class="container">
            <header class="header">
                <RouterLink to="/blog" class="back">&larr; Back to Blog</RouterLink>
                <h1 class="title">{{ post.title }}</h1>
                <time :datetime="post.date" class="date">{{ formattedDate }}</time>
            </header>
            <RopesDivider variant="gold" />
            <div class="blog-post-content" v-html="renderedContent"></div>
            <footer class="foot">
                <RopesDivider variant="subtle" />
                <RouterLink to="/blog" class="back">&larr; Back to Blog</RouterLink>
            </footer>
        </article>
        <div v-else class="not-found">
            <h1>Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist.</p>
            <RouterLink to="/blog" class="back">&larr; Back to Blog</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.post {
    padding: var(--space-xl) 0;

    .container {
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 0 var(--space-lg);
    }

    .header {
        margin-bottom: var(--space-md);
    }

    .title {
        font-size: 2.2rem;
        margin: var(--space-md) 0 var(--space-sm);
    }

    .date {
        display: block;
        color: var(--color-gray);
        font-size: 0.9rem;
    }

    .back {
        font-weight: 600;
        font-size: 0.9rem;
    }

    .foot {
        margin-top: var(--space-xl);
    }

    .not-found {
        max-width: var(--content-width);
        margin: 0 auto;
        padding: var(--space-2xl) var(--space-lg);
        text-align: center;

        h1 {
            margin-bottom: var(--space-md);
        }

        p {
            color: var(--color-gray);
            margin-bottom: var(--space-lg);
        }
    }
}
</style>
