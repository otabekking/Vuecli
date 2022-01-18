<template>
  <div>
    <h2 v-colored v-if="visible">
      {{ title }}
    </h2>
    <button @click="visible = !visible">Toggle</button>
    <button @click="title = 'new title'">Change</button>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      title: "hello i am vue",
      visible: true,
    };
  },
};
</script>

<style scoped>
</style>>


