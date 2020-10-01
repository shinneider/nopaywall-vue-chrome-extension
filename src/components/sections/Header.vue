<template>
  <header>
    <h1>No<b>Paywall</b></h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    extName: () => browser.i18n.getMessage('extName'),
  }
}
</script>

<style scoped>
Header {
  padding: 16px;
  font-family: "Source Sans Pro", sans-serif;
  justify-content: center;
  display: flex;
}

h1 {
  margin: 0px;
  color: #cccaca;
  font-size: 1.6em;
}

h1 b {
  color: #585858;
}
</style>
