<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles').fetch()

    return { articles }
  },
  data() {
    return {
      YTurl: 'https://www.youtube.com/channel/UCL-p8Y35mf3vxhc625Ca2PQ',
      Iurl: 'https://www.instagram.com/seabothsides/?hl=en',
    }
  },
}
</script>

<template lang="pug">
v-container( fluid )
  v-row.text-center
    v-col( cols='12')
      h1 Help a Brother Out
    v-col 
      p by visiting my #[a(:href="YTurl" target="_blank") youtube] #[v-icon.red--text( large ) mdi-youtube]
      p or check out my #[a(:href='Iurl' target="_blank") instagram] #[v-icon.purple--text( large ) mdi-instagram]
      ul( v-for="articles in articles")
        li  
          nuxt-link( :to="{ name: 'blog-slug', params: { slug: articles.slug } }" ) {{ articles.title }}

</template>


<style lang="sass" scoped>
a
  text-decoration: none
</style>
