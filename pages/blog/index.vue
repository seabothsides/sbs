<template lang="pug">
v-sheet
  v-card.my-3(v-for='(articles, index) in articles', :key='index')
    v-card-title 
      nuxt-link(:to='{ name: "blog-slug", params: { slug: articles.slug } }') {{ articles.title }}
    v-card-text {{ articles.description }}
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles').fetch()

    return { articles }
  },
}
</script>

<style lang="sass">
ul
  list-style: none
a
  text-decoration: none
</style>