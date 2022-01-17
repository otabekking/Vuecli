<template>
  <div class="box">
    <h2>
      Name:
      {{ CarName }} /{{ reverseName }}
    </h2>
    <h2>Year: {{ CarYear }}</h2>

    <button @click="changeName">Change Name</button>
    <button @click="changeFunc()">Change Car</button>
    <button @click="updateCounter">Counter num</button>
  </div>
</template>

<script>
export default {
  // props qushamiz hozi chunki biz app carga CarName deganmiz uchun uni topish uchun Props yordamidan foydalanmiz

  // props: ["CarName", "CarYear"],
  // props:{
  //   CarName:String,
  //   CarYear:Number
  // },
  props: {
    CarName: {
      type: String,
    },
    CarYear: Number,
    changeFunc: Function,
    counter: Number,
  },
  methods: {
    changeName() {
      this.CarName = " MERCEDES";
      this.$emit("changeAllname", this.CarName);
    },
    updateCounter() {
      this.$emit("counterUpdated", this.counter + 1);
    },
  },

  computed: {
    reverseName() {
      return this.CarName.split("").reverse().join("");
    },
  },
  // endi data ucheramiz chunki biz compotedan foydalanmiz
  // data: function () {
  //   return {
  //     // carname ucherib turamiz chunki App.vue da uzgarish uchun
  //     // CarName: "Ford ",
  //     CarYear: 2019,
  //   };
  // },
};
</script>

<style>
.box {
  border: 2px solid black;
  padding: 10px;
}
</style>
