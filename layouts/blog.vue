<template lang="pug">
v-app
  v-app-bar(
    app,
    elevate-on-scroll,
    :clipped-left='clipped',
    dense,
    clipped-right
  )
    v-btn.font-weight-bold(text, to='/') @ Sea Both Sides
    v-spacer
    v-app-bar-nav-icon(@click.stop='drawer = !drawer')
  v-navigation-drawer(app, width='190', v-model='drawer', :clipped='clipped')
    v-list(nav, dense)
      v-list-item
        v-list-item-content
          v-list-item-title.pl-3 Blog Nav
          v-divider
          v-btn(text, :to='{ name: "blog" }', exact) Articles
  v-main.overflow-hidden 
    nuxt
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: true,
    }
  },
}
</script>

<style lang="sass" scoped>
</style>