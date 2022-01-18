<template>
  <div>
    <h2 v-colored:background.font="'yellow'">
      {{ title }}
    </h2>
    <h2 v-colored:color.delay="'blue'">{{ title }}</h2>
    <h2 v-fontL>Lorem ipsum dolor sit.</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello i am vue",
    };
  },
  directives: {
    fontL: {
      bind(el, binding, vnode) {
        el.style.fontSize = "30px";
      },
    },
  },
};
</script>

<style scoped>
</style>>


