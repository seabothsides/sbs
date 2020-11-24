<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
      ],
    }
  },
}
</script>

<template lang="pug">
v-container
  v-navigation-drawer(right, clipped, app)
    ul
      p.text-center.overline.mb-n1 Table Of Contents
      li(v-for="link of article.toc" :key="link.id" :class="{ 'text-wrap pb-1 v-list-item__title': link.depth === 2, 'pl-5 pb-1 v-list-item__subtitle': link.depth === 3 }")
        a(:href="`#${link.id}`") {{ link.text }}
  v-container
    h1.text-h4.text-capitalize {{ article.title }}
    div.text-overline.ml-1.text--secondary Article last updated: {{ formatDate(article.updatedAt) }}
    div.text-subtitle-1 {{ article.description }}
    v-card.pa-1.align-center.mb-1(flat)
      v-avatar.mr-2 
        img( :src="article.author.img" )
      p.d-inline.subtitle-2.text--secondary Author: {{ article.author.name }}
    v-divider
    ul.hidden-md-and-up.mb-2.pl-2
      p.text--secondary.mb-n1.overline Table Of Contents
      li.mb-1(v-for="link of article.toc" :key="link.id" :class="{ 'text-wrap v-list-item__title': link.depth === 2, 'pl-5 v-list-item__subtitle': link.depth === 3 }")
       a(:href="`#${link.id}`") {{ link.text }}
    v-divider.mb-2
    nuxt-content(:document="article") /
</template>

<style>
.nuxt-content h2 {
  margin-bottom: 0.25em;
  margin-top: 1.75em;
}

.nuxt-content strong {
  color: #e040fb;
  font-size: 0.96em;
}

.nuxt-content a {
  text-decoration: none;
  color: #3d5afe;
}

.nuxt-content li {
  margin-bottom: 0.75em;
}

.nuxt-content blockquote {
  background: #f6fbfb;
  border-left: 10px solid #1460b6;
  color: #1460b6;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
}

code[class*='language-'] ::selection,
code[class*='language-']::selection,
pre[class*='language-'] ::selection,
pre[class*='language-']::selection {
  background: #7e7d7e;
}
.v-application code {
  background-color: transparent;
  color: #f5f7fa;
  font-size: 0.95em;
}

.nuxt-content-highlight .filename {
  color: #cbd5e0;
  z-index: 10;
  position: absolute;
  right: 0;
  margin-right: 0.5rem;
  font-size: 0.865rem;
  font-weight: 300;
  margin-top: 0.25rem;
}

.nuxt-content pre {
  position: static;
  background-color: #2f495e;
}

a {
  text-decoration: none;
}
</style>