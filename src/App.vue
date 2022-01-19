<template>
  <div>
    <h2>Form Input</h2>
    <select v-model="standing">
      <option v-for="s in socialList">{{ s }}</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      standing: "Telegram",
      socialList: ["Vk", "Instagram", "Telegram"],
    };
  },
};
</script>

<style scoped>
</style>>


