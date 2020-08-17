<template>
  <div>
    <strong>Created by Achmad Wahyu</strong>
    <ul>
      <li>In the Home Page, Table component is rendered, using data from data.json</li>
      <li>ID in each row table routes to user details, which can be accessed via links using query params</li>
      <li>In calculator Page, Private Calculator component is rendered, user must be logged in to use the calculator</li>
      <li>After filling the form, authenticated status is then stored in localStorage</li>
      <li>If the user prompt to access calculator via links without authenticated status in the localStorage preserved, he/she will be redirected to login form </li>
    </ul>
  </div>
</template>

<script>
export default {
 
};
</script>

<style>
</style>
