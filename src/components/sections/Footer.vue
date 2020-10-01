<template>
  <footer>
    {{messageFooter}}
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    messageFooter: () => browser.i18n.getMessage('messageFooter'),
  }
}
</script>

<style scoped>
footer {
  padding: 16px;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 13px;
  color: #585858;
  border-top: 1px solid #e6e6e6;
}
</style>
