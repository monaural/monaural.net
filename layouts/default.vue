<template>
  <div>
    <site-header/>
    <nuxt/>
    <site-footer/>
  </div>
</template>

<style lang="scss">
</style>

<script>
  import SiteHeader from '~/components/SiteHeader.vue'
  import SiteFooter from '~/components/SiteFooter.vue'

  export default {
    components: {
      SiteHeader,
      SiteFooter
    }
  }
</script>
