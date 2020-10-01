<template>
  <label class="switch" :style="style">
    <input
      type="checkbox"
      :checked="value"
      @click="$emit('update:value', !value)"
    />
    <span class="slider" :class="{ round: rounded }"></span>
  </label>
</template>

<script>
export default {
  name: "CheckBoxSwitch",
  props: {
    rounded: Boolean,
    value: Boolean,
    width: {
      type: Number,
      default: 60,
    },
    height: {
      type: Number,
      default: 26,
    },
    color: {
      type: String,
      validator: (val) => /^#[0-9A-F]{6}$/i.test(val),
    },
    colorChecked: {
      type: String,
      validator: (val) => /^#[0-9A-F]{6}$/i.test(val),
    },
  },
  computed: {
    style() {
      return {
        "--width": this.width + "px",
        "--height": this.height + "px",
        "--color": this.color || "#ccc",
        "--color-active": this.colorChecked || "#2196F3",
      };
    },
  },
};
</script>

<style>
.switch {
  position: relative;
  display: inline-block;
  width: var(--width);
  height: var(--height);
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: calc(var(--height) - 8px);
  width: calc(var(--height) - 8px);
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: var(--color-active);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--color-active);
}

input:checked + .slider:before {
  -webkit-transform: translateX(calc(var(--width)- var(--height)));
  -ms-transform: translateX(calc(var(--width)- var(--height)));
  transform: translateX(calc(var(--width) - var(--height)));
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
