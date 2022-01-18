<template>
  <div>
    <app-car>
      <h2 slot="title">{{ carName }}</h2>
      <p slot="text">Lorem ipsum dolor sit amet.</p>
    </app-car>
  </div>
</template>

<script>
// this car's second view in this App
import Car from "./Car.vue";

export default {
  data() {
    return {
      carName: "Ford",
    };
  },
  components: {
    appCar: Car,
  },
};
</script>

<style scoped>
h2 {
  color: rgb(175, 109, 79);
}
</style>>


