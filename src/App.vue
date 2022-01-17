<template>
  <div class="otabek">
    <counter-App></counter-App>
    <app-car></app-car>
  </div>
</template>

<script>
// this car's second view in this App
import Car from "./Car.vue";
import Counter from "./Counter.vue";

export default {
  components: {
    appCar: Car,
    counterApp: Counter,
  },
};
</script>

<style>
.otabek h1 {
  text-align: center;
}
</style>
