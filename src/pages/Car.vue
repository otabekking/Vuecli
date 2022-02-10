<template>
  <div>
    <h1>Car {{ id }}</h1>

    <button class="btn btn-sm btn-default mb-2" @click="goBackToCars">
      Back
    </button>
    <br />
    <!-- <router-link class="btn btn-info" tag="button" :to="'/car/' + id + '/full'"
      >Full info</router-link> -->
    <router-link
      class="btn btn-info mt-2"
      tag="button"
      :to="{
        name: 'carFull',
        params: { id: id },
        query: { name: 'BMW', year: 2022 },
      }"
      >Full info</router-link
    >

    <hr />

    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$router.currentRoute.params.id,
    };
  },
  methods: {
    goBackToCars() {
      this.$router.push("/cars");
    },
  },
  watch: {
    $route(toR, from) {
      this.id = toR.params.id;
    },
  },
  beforeRouteLeave(to, fromR, next) {
    console.log("beforeRouteLeave");
    if (window.confirm("Are you suer you want to leave?")) {
      next();
    } else {
      next(false);
    }
  },
};
</script>

<style scoped>
</style>