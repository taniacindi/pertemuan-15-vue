<template>

  <Header />

  <div class="container">

    <Sidebar />

    <main class="content">
      <slot />
    </main>

  </div>

</template>

<script setup>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
</script>

<style scoped>
.container{
    display:flex;
}

.content{
    flex:1;
    padding:30px;
}
</style>