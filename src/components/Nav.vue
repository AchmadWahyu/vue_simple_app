<template>
  <nav>
    <router-link exact class="nav-item" :to="{name: 'Home'}">Home</router-link>
    <router-link class="nav-item" :to="{name: 'PrivateCalculator'}">Private Calculator</router-link>
    <router-link class="nav-item" :to="{name: 'About'}">About</router-link>
  </nav>
</template>


<script>
export default {};
</script>

<style>
nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.1), 1px 2px 2px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
}

.nav-item {
  padding: 15px 20px;
  color: rgb(41, 41, 41);
}

.router-link-active {
  padding: 15px 20px;
  background-color: rgb(101, 104, 103);
  color: white;
}
</style>
