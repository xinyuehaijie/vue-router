<template>
  <div>
    <header-nav></header-nav>
    <router-view>

    </router-view>
  </div>
</template>

<script>
  import header from '@/components/header'
    export default {
      name: "layout",
      components:{
        headerNav:header
      }
    }
</script>

<style scoped>

</style>
