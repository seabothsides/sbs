<script>
export default {
  data() {
    return {}
  },
  async asyncData({ $content, params }) {
    const landing = await $content('pages/landing').fetch()

    return { landing }
  },
  head() {
    return {
      title: this.landing.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.landing.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.landing.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.landing.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.landing.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.landing.description,
        },
      ],
    }
  },
}
</script>

<template lang="pug">
v-container(fluid)
  v-row.text-center.text-md-left(
    v-for='(i, index) in landing.section',
    :key='index',
    justify='center',
    align='center',
    style='height:95vh',
    dense
  )
    v-col.pl-md-9(cols=12, md=6)
      p.title {{ landing.section[index].content.title }}
      p.caption.text-md-justify {{ landing.section[index].content.caption }}
      v-btn.font-weight-bold.text-wrap(
        v-if='landing.section[index].content.button.eurl',
        :href='landing.section[index].content.button.eurl',
        target='_blank',
        color='primary'
      ) {{ landing.section[index].content.button.name }}
      v-btn.font-weight-bold.text--white(
        v-if='landing.section[index].content.button.iurl',
        :to='{ name: landing.section[index].content.button.iurl }',
        color='primary'
      ) {{ landing.section[index].content.button.name }}
    v-col(cols=12, md=6, order='first', order-md='last')
      v-img.mx-auto(
        :src='landing.section[index].content.image',
        max-width='650',
        max-height=''
      )
</template>


<style lang="sass" scoped>
a
  text-decoration: none
</style>
