<template>
  <section :class="mainClass">
    <slot name="content"></slot>
  </section>
</template>

<script>
export default {
  name: "Section",
  props: {
    color: {
      type: String,
      validator: (val) => ["alternate", "dark"].includes(val),
    },
  },
  computed: {
    mainClass() {
      let classes = {};
      if (this.color) classes[this.color] = true;
      return classes;
    },
  },
};
</script>

<style scoped>
section {
  padding: 10px;
  border-top: 1px solid #e6e6e6;
}

.alternate {
  background-color: #f7f7f7;
}

.dark {
  background-color: #212121;
  border-top: rgba(255, 255, 255, 0.1) 1px solid;
}
</style>
