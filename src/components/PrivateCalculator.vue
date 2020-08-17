<template>
  <div>
    Input 1 :
    <input v-model.number="value1">
    <br>Input 2 :
    <input v-model.number="value2">
    <div class="flexContainer">
      <button v-on:click="sum">+</button>
      <button v-on:click="min">-</button>
      <button v-on:click="times">*</button>
      <button v-on:click="div">/</button>
    </div>
    <br>
    Result : {{result}}
    <br>
    <button v-on:click="logOut">logOut</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: null,
      value2: null,
      result: null
    };
  },
  methods: {
    sum() {
      return (this.result = this.value1 + this.value2);
    },
    min() {
      return (this.result = this.value1 - this.value2);
    },
    times() {
      return (this.result = this.value1 * this.value2);
    },
    div() {
      return (this.result = this.value1 / this.value2);
    },
    logOut() {
      localStorage.clear();
      this.$router.replace({ name: "Home" });
    }
  }
};
</script>

<style>
.flexContainer {
  display: flex;
  flex-direction: row;
}
.flexContainer button {
  margin: 0 10px;
  padding: 5px 10px;
}
</style>
