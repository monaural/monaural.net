<template>
  <header class="header">
    <nuxt-link to="/">
      <h1>monaural</h1>
      <h2>モノラル</h2>
    </nuxt-link>
  </header>
</template>

<style lang="scss">
  .header {
    a {
      color: inherit;
      &:hover {
        color: inherit;
        h1, h2 {
          filter: drop-shadow(0 0 8px rgba($color, .5));
        }
      }
    }
  }

  h1 {
    font-weight: 100;
    font-size: 250%;
  }

  h2 {
    font-weight: 100;
    font-family: serif;
    font-size: 80%;
  }
</style>
