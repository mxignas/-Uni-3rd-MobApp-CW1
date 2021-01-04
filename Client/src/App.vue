<template>
  <div id="app">
    <!-- Showing banner to all the components -->
    <Banner />
    <router-view />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
export default {
  name: 'App',
  components: {
    Banner,
  }
}
</script>

<style>
</style>
