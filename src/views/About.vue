<template>
  <Layout>

    <div class="about">

      <h1>Tentang Aplikasi</h1>

      <p>
        Aplikasi ini dibuat menggunakan Vue 3 sebagai tugas
        Praktikum Desain Web 2.
      </p>

      <ul>

        <li>Vue 3</li>

        <li>Vue Router</li>

        <li>Axios</li>

        <li>ReqRes API</li>

      </ul>

    </div>

  </Layout>
</template>

<script setup>
import Layout from "../layouts/Layout.vue";
</script>

<style scoped>

.about{

background:white;

padding:30px;

border-radius:15px;

box-shadow:0 5px 15px rgba(0,0,0,.15);

}

ul{

margin-top:20px;

}

li{

margin:10px 0;

}

</style>