<script>
export default {
  data() {
    return {
      YTurl: 'https://www.youtube.com/channel/UCL-p8Y35mf3vxhc625Ca2PQ',
      Iurl: 'https://www.instagram.com/seabothsides/?hl=en',
    }
  },
}
</script>

<template lang="pug">
v-container(fluid)
  v-card(flat)
    v-row(align='center')
      v-col(cols=12, md=6)
        h2.ml-md-7.text-center.text-md-left Do you:<br> Need your own website?<br> Want a creative outlet?<br> Need a bespoke portfolio?<br><br> Follow my Blog on how to make a website with Nuxt JS that can be hosted for free today
      v-col.text-center(cols=12, md=6)
        v-btn.col-md-5.mr-sm-2.font-weight-black.mb-3.mb-md-0(
          x-large,
          to='/blog',
          rounded,
          width='min-content',
          color='primary'
        ) Visit My Blog
        v-btn.ml-4.col-md-5.font-weight-black(
          :href='YTurl',
          target='_blank',
          x-large,
          rounded,
          width='min-content'
        ) Visit My Youtube
          v-icon.red--text(x-large) mdi-youtube
</template>


<style lang="sass" scoped>
a
  text-decoration: none

.v-card
  margin: 25vh 0%
</style>
