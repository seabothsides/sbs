<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
  data() {
    return {
      query: '',
      articles: [],
    }
  },
  watch: {
    async query(query) {
      if (!query) {
        this.articles = []
        return
      }

      this.articles = await this.$content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .limit(12)
        .search(query)
        .fetch()
    },
  },
}
</script>

<template>
  <article class="pa-6">
    <author :author="article.author" />
    <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
    <div>
      <input v-model="query" type="search" autocomplete="off" />

      <ul v-if="articles.length">
        <li v-for="article in articles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">{{ article.title }}</NuxtLink>
        </li>
      </ul>
    </div>
    <nav>
      <ul>
        <li
          v-for="link of article.toc"
          :key="link.id"
          :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }"
        >
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <v-divider></v-divider>
    <v-spacer></v-spacer>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <nuxt-content :document="article" />
  </article>
</template>

<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
  margin-left: 1em;
}

.nuxt-content strong {
  color: purple;
}

.nuxt-content a {
  text-decoration: none;
}
</style>