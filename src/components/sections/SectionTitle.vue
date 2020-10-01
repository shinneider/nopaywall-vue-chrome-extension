<template>
  <h2>{{title}}</h2>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    title: String
  }
}
</script>

<style scoped>
h2 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  margin-top: 0px;
  justify-content: center;
  display: flex;
  margin-bottom: 15px;
  text-transform: uppercase
}
</style>
