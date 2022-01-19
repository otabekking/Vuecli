<template>
  <div>
    <h2>Form Input</h2>

    <label for="">
      <input type="checkbox" value="Instagram" v-model="socila" /> Instagram
    </label>

    <label for="">
      <input type="checkbox" value="Vk" v-model="socila" /> Vk
    </label>

    <label for="">
      <input type="checkbox" value="Telegram" v-model="socila" /> Telegram
    </label>
    <hr />
    <ul>
      <li v-for="s in socila">{{ s }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socila: ["Vk"],
    };
  },
};
</script>

<style scoped>
</style>>


