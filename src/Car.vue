<template>
  <div>
    <!-- <slot></slot> -->
    <slot name="title"></slot>
    <hr />
    <hr />
    <slot name="text"></slot>
  </div>
</template>

<script>
import { eventEmitter } from "./main";

export default {};
</script>

<style>
div {
  border: 1px solid #000;
  padding: 10px;
}
</style>
