<template>
  <div>
    ID :
    <input v-model="id">
    Password :
    <input v-model="pass">
    <button v-on:click="Submit" v-bind:disabled="!id || !pass">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      pass: "",
      authenticated: false
    };
  },
  methods: {
    Submit() {
      if (this.id && this.pass) {
        this.authenticated = true;
        localStorage.authenticated = this.authenticated;
      }
      this.$router.push({ name: "PrivateCalculator" });
    }
  }
};
</script>

<style>
</style>
