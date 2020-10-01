<template>
  <button class="button" :class="mainClass" @click="$emit('click')">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "CheckBoxSwitch",
  props: {
    text: String,
    color: {
      type: String,
      default: () => "green",
      validator: (val) =>
        ["green", "blue", "red", "gray", "black"].includes(val),
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

<style>
.button {
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.green {
  background-color: #4caf50;
  color: white;
}
.blue {
  background-color: #008cba;
  color: white;
}
.red {
  background-color: #f44336;
  color: white;
}
.gray {
  background-color: #e7e7e7;
  color: black;
}
.black {
  background-color: #555555;
  color: white;
}
</style>
