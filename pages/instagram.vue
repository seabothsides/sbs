<script>
export default {
  data() {
    return {
      YTurl: 'https://www.youtube.com/channel/UCL-p8Y35mf3vxhc625Ca2PQ',
    }
  },
}
</script>

<template lang="pug">
v-container(fluid)
  v-row
    v-img(src='/uploads/header.webp', cover, max-height='400')
  v-row.text-center.justify-center
    v-col(cols=12, md=6)
      h2 A salt lake so big that merchants could spend their whole lives and still not get all the salt
  v-row.justify-center
    v-col(cols=6)
      v-row.justify-center
        v-btn.col-md-5.mb-7.font-weight-black(
          x-large,
          to='blog',
          rounded,
          color='primary'
        ) Blog
      v-row.justify-center
        v-btn.col-md-5.mb-7(:href='YTurl', target='_blank', x-large, rounded)
          v-icon.red--text(x-large) mdi-youtube
</template>


<style lang="sass" scoped>
a
  text-decoration: none
</style>
