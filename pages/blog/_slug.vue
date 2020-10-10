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

<template lang="pug">
v-container
  author(:author="article.author")
  v-navigation-drawer(right, clipped, app)
    v-list
      p.text-center.strong Table Of Contents
      v-list-item(v-for="link of article.toc" :key="link.id" :class="{ 'text-wrap v-list-item__title': link.depth === 2, 'pl-10 v-list-item__subtitle': link.depth === 3 }")
        NuxtLink(:to="`#${link.id}`") {{ link.text }}
  v-divider
  article.pa-md-5
    p.overline Article last updated: {{ formatDate(article.updatedAt) }}
    h1.text-h3 {{ article.title }}
    p.text-subtitle-1.text--secondary {{ article.description }}
    v-divider
    ul.hidden-md-and-up.mb-2.pl-2
      p.text--secondary Table Of Contents
      li.mb-1(v-for="link of article.toc" :key="link.id" :class="{ 'text-wrap v-list-item__title': link.depth === 2, 'pl-10 v-list-item__subtitle': link.depth === 3 }")
        NuxtLink(:to="`#${link.id}`") {{ link.text }}
    v-divider.mb-2
    nuxt-content(:document="article") /
</template>

<style>
.nuxt-content h2 {
  margin-bottom: 0.25em;
  margin-top: 1.75em;
}
.nuxt-content strong {
  color: purple;
}

.nuxt-content a {
  text-decoration: none;
}
.nuxt-content li {
  margin-bottom: 1em;
}
.v-application code {
  background-color: #e3edf2;
  color: #1460b6;
}

pre[class*='language-'] {
  background: #f6fbfb;
}

a {
  text-decoration: none;
}
</style>