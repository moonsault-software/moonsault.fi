import { computed } from 'vue'
import fm from 'front-matter'
import { marked } from 'marked'

export interface BlogPost {
    slug: string
    title: string
    date: string
    excerpt: string
    tags: string[]
    content: string
}

interface PostFrontmatter {
    title?: string
    date?: string
    excerpt?: string
    tags?: string[]
}

const postModules = import.meta.glob<string>('@/posts/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
})

const allPosts: BlogPost[] = Object.entries(postModules)
    .map(([filepath, rawContent]) => {
        const filename = filepath.split('/').pop() ?? ''
        const slug = filename.replace(/\.md$/, '')
        const { attributes, body } = fm<PostFrontmatter>(rawContent)

        return {
            slug,
            title: attributes.title || slug,
            date: attributes.date || '1970-01-01',
            excerpt: attributes.excerpt || '',
            tags: attributes.tags || [],
            content: body,
        }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export function usePosts() {
    const posts = computed(() => allPosts)

    function getPost(slug: string): BlogPost | null {
        return allPosts.find((p) => p.slug === slug) || null
    }

    function renderPost(slug: string): string {
        const post = getPost(slug)
        if (!post) return ''
        return marked.parse(post.content) as string
    }

    return { posts, getPost, renderPost }
}
