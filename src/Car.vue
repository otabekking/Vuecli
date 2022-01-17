<template>
  <div>
    <h2>
      {{ carName }}
    </h2>
  </div>
</template>

<script>
import { eventEmitter } from "./main";

export default {
  props: ["carName"],
};
</script>

<style>
div {
  border: 1px solid #000;
  padding: 10px;
}
</style>
