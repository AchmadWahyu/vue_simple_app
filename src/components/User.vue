<template>
  <div>
    <h2>ID : {{data.id}}</h2>
    <p>Name : {{data.first_name}} {{data.last_name}}</p>
    <p>Email : {{data.email}}</p>
    <hr>
    <img v-bind:src="data.avatar">
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      id: this.$route.params.id,
      data: {}
    };
  },
  mounted() {
    Axios.get(`https://reqres.in/api/users/${this.id}`).then(res => {
      console.log("result : ", res);
      this.data = res.data.data;
    });
  }
};
</script>

<style>
</style>
