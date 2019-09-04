<template>
  <div>
    <span>bem-vindo</span>
    <h5>User {{ $route.params.id }}</h5>
    <router-view></router-view>
  </div>
  <!-- {{ $route.params.username }} -->
</template>

<script>

export default {};
</script>

<style>
</style>