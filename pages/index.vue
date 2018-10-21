<template>
  <main class="home">
    <ul>
      <li><a href="https://blog.monaural.net/">ブログ</a></li>
      <li><a href="https://pause.monaural.net/">pause // music blog</a></li>
      <li><a href="https://matsuoshi.hatenablog.com/">はてなブログ</a></li>
    </ul>

    <p>
      <nuxt-link class="btn" to="/contact">concact / お問い合わせ</nuxt-link>
    </p>
  </main>
</template>

<style lang="scss">
  .home {
    ul {
      padding-left: 40px;
      margin-bottom: 4em;

      li {
        list-style: circle;
        margin-bottom: .8em;
      }
    }
  }
</style>

<script>
  export default {
    head() {
      return {
      }
    }
  }
</script>
