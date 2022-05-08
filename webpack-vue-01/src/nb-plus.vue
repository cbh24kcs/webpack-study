<template>
  <div style="border: 1px solid red">
    <h1>{{ msg }}</h1>
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
  </div>
</template>

<script>
import ButtonCounter from "./button-counter.vue";
export default {
  components: {
    "button-counter": ButtonCounter,
  },
  data: function () {
    return {
      msg: "这是一个我自己的定义的组件",
    };
  },
};
</script>

<style>
</style>