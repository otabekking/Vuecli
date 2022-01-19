<template>
  <div>
    <h2>Form Input</h2>
    <app-Onoff v-model="switched"></app-Onoff>
    <div>
      <h3 v-if="switched">switched</h3>
      <h3 v-else>not switched</h3>
    </div>
  </div>
</template>

<script>
import onOff from "./onOff.vue";
export default {
  data() {
    return {
      switched: false,
    };
  },
  components: {
    appOnoff: onOff,
  },
};
</script>

<style scoped>
</style>>


