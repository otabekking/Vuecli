<template>
  <div>
    <h2>
      {{ title }}
    </h2>
    <input type="text" v-model="searchName" />

    <ul>
      <li v-for="qalam of filterNames">{{ qalam }}</li>
    </ul>
    <hr />

    <app-list></app-list>
  </div>
</template>

<script>
import listMixin from "./listMixin";
export default {
  data() {
    return {
      title: "Hello i am vue",
    };
  },
  mixins: [listMixin],

  filters: {
    lowercase(value) {
      return value.toLowerCase();
    },
  },
};
</script>

<style scoped>
</style>>


