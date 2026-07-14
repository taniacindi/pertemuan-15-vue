<template>
  <Layout>

    <h1>Daftar User</h1>

    <div v-if="loading">
      Loading...
    </div>

    <div class="grid" v-else>

      <div
        class="card"
        v-for="user in users"
        :key="user.id"
      >

        <img :src="user.avatar">

        <h3>
          {{ user.first_name }} {{ user.last_name }}
        </h3>

        <p>{{ user.email }}</p>

      </div>

    </div>

  </Layout>
</template>

<script setup>
import { ref,onMounted } from "vue";
import Layout from "../layouts/Layout.vue";
import api from "../services/api";

const users=ref([]);
const loading=ref(true);

const getUsers=async()=>{

const response=await api.get("/users?page=1");

users.value=response.data.data;

loading.value=false;

}

onMounted(getUsers);
</script>

<style scoped>

.grid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(220px,1fr));

gap:20px;

margin-top:25px;

}

.card{

background:white;

padding:20px;

border-radius:15px;

box-shadow:0 5px 15px rgba(0,0,0,.15);

text-align:center;

transition:.3s;

}

.card:hover{

transform:translateY(-5px);

}

img{

width:100px;

height:100px;

border-radius:50%;

margin-bottom:15px;

}

h3{

margin-bottom:8px;

}

p{

color:#666;

}

</style>