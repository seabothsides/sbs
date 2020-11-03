<template lang="pug">
v-sheet.overflow-y-auto(max-height='90vh')
  nuxt-child
</template>

<script>
export default {
  layout: 'blog',
}
</script>