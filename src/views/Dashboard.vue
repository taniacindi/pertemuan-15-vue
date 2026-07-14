<template>
  <Layout>

    <div class="dashboard">

      <h1>Dashboard</h1>

      <p class="subtitle">
        Selamat datang di aplikasi Vue 3 User Management
      </p>

      <div class="cards">

        <RouterLink to="/users" class="card blue">
          <h2>👥 Daftar User</h2>
          <p>Melihat seluruh data user dari ReqRes API</p>
        </RouterLink>

        <RouterLink to="/create" class="card green">
          <h2>➕ Tambah User</h2>
          <p>Menambahkan user menggunakan metode POST</p>
        </RouterLink>

        <RouterLink to="/about" class="card orange">
          <h2>ℹ️ About</h2>
          <p>Informasi mengenai aplikasi</p>
        </RouterLink>

      </div>

    </div>

  </Layout>
</template>

<script setup>
import Layout from "../layouts/Layout.vue";
</script>

<style scoped>

.dashboard{
    padding:20px;
}

.subtitle{
    color:#666;
    margin-bottom:30px;
}

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:20px;
}

.card{
    text-decoration:none;
    color:white;
    padding:30px;
    border-radius:15px;
    box-shadow:0 8px 20px rgba(0,0,0,.15);
    transition:.3s;
}

.card:hover{
    transform:translateY(-8px);
}

.blue{
    background:#2563eb;
}

.green{
    background:#16a34a;
}

.orange{
    background:#ea580c;
}

.card h2{
    margin-bottom:10px;
}

</style>