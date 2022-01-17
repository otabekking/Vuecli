<template>
  <div class="otabek">
    <!-- <h1>
      {{ msg }}
    </h1> -->

    <h1>
      Parent:
      {{ CarName }}
    </h1>
    <counter-App></counter-App>
    <app-car
      :CarName="CarName"
      :CarYear="CarYear"
      :changeFunc="changeToAudin"
      @changeAllname="CarName = $event"
      @counterUpdated="counter = $event"
    ></app-car>
  </div>
</template>

<script>
// this car's second view in this App
import Car from "./Car.vue";
import Counter from "./Counter.vue";

export default {
  data() {
    return {
      //eski va birinchi holati h1 boglangan bu msg
      // msg: "my first project is otabek ...",

      CarName: "Ford",
      CarYear: 2000,
    };
  },
  methods: {
    changeToAudin() {
      this.CarName = "Audi";
    },
  },

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
