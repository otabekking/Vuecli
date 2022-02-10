<template>
  <div>
    <h3>Car name: {{ $route.query.name }}</h3>
    <h4>Car year: {{ year }}</h4>
  </div>
</template>

<script>
export default {
  computed: {
    year() {
      return this.$route.query.year;
    },
  },
  beforeRouteEnter(to, fromR, next) {
    console.log(" beforeRouteEnter");
    next(true);
  },
};
</script>

<style scoped>
</style>