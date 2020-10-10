<template lang="pug">
v-row.text-center.justify-center
  v-col(cols=12, sm=7)
    v-card.mx-auto.d-md-flex.pb-md-3
      .justify-center.justify-sm-start
        v-img.pt-5.mt-md-3.mx-auto.ml-md-4(
          :src='author.img',
          contain,
          max-width='125'
        )
      div
        v-card-title.justify-center {{ author.name }}
        v-card-subtitle Author
        v-card-text {{ author.bio }}
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
}
</script>