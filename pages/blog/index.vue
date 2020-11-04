<template lang="pug">
v-container
  v-row.justify-center
    v-col(cols=12, md=8)
      v-card.mb-4(v-for='(articles, index) in articles', :key='index')
        v-card-title.text-capitalize 
          nuxt-link(
            :to='{ name: "blog-slug", params: { slug: articles.slug } }'
          ) {{ articles.title }}
        v-card-text {{ articles.description }}
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('blog').sortBy('createdAt', 'desc').fetch()

    return { articles }
  },
}
</script>

<style lang="sass" scoped>
ul
  list-style: none
a
  text-decoration: none
</style>