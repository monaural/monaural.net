<template>
  <main class="error">
    <h3 v-if="error.statusCode === 404">404 not found.</h3>
    <h3 v-else>error.</h3>
    <ul>
      <li><a href="https://matsuoshi.hatenablog.com/">はてなブログ</a></li>
      <li><a href="https://pause.monaural.net/">pause // music blog</a></li>
    </ul>
  </main>
</template>

<style lang="scss">
  .error {
    h3 {
      font-size: 1.2em;
      margin-bottom: 2em;
    }
  }
</style>

<script>
  export default {
    head() {
      return {
        title: 'error'
      }
    },
    props: ['error']
  }
</script>
