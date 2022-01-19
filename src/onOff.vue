<template>
  <div>
    <button class="On" :class="{ active: value }" @click="onChange(true)">
      On
    </button>
    <button class="Of" :class="{ active: !value }" @click="onChange(false)">
      Off
    </button>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    onChange(newValue) {
        this.$emit('input',newValue)
    },
  },
};
</script>

<style scoped>
button {
  padding: 5px 15px;
  cursor: pointer;
  margin-right: 20px;
  outline: none;
}
bottom:active {
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.5);
}
.On.active {
  background: green;
  color: #fff;
}
.Of.active {
  background: red;
  color: #fff;
}
</style>

