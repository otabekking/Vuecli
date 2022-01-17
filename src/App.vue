<template>
  <div>
    <app-car>
      <h2>Mazda -</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </app-car>
  </div>
</template>

<script>
// this car's second view in this App
import Car from "./Car.vue";

export default {
  components: {
    appCar: Car,
  },
};
</script>

<style>

</style>
