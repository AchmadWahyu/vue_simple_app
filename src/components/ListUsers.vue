<template>
  <div>
    <div v-for="user of users" :key="user.id">
      <user data={user} />
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>
