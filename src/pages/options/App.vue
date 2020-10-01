<template>
  <div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/sections/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style>
html {
  width: 400px;
  height: 50px;
}

body {
  font-size: 100%;
  margin: 0px;
}
</style>
