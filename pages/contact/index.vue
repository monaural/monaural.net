<template>
  <main class="contact">
    <h3 class="title">Contact / お問合せ</h3>
    <p>お気軽にお問合せください。通常3営業日以内に返信いたします。</p>

    <no-ssr>
      <form name="contact" method="POST" action="/contact/thanks" data-netlify="true">
        <input type="hidden" name="form-name" value="contact">
        <p>
          <label>お名前 / Name <input type="text" name="name" required /></label>
        </p>
        <p>
          <label>メールアドレス / Email <input type="email" name="email" required /></label>
        </p>
        <p>
          <label>お問合せ内容 / Message <textarea name="message" rows="5" required></textarea></label>
        </p>
        <div data-netlify-recaptcha></div>
        <p>
          <button type="submit" class="btn">送信 / Send</button>
        </p>
      </form>
    </no-ssr>
  </main>
</template>

<style lang="scss">
  form {
    margin-top: 2em;
    margin-right: 1em;

    input, textarea {
      display: block;
      margin-top: .5em;
      margin-bottom: 2em;
      font-size: 80%;
      width: 100%;
      max-width: 640px;
      padding: .5em;
      border: 1px solid #888;
    }
  }
</style>

<script>
  export default {
    head() {
      return {
        title: 'contact'
      }
    }
  }
</script>
