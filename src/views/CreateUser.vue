<template>
  <Layout>

    <div class="container">

      <div class="card">

        <h1>➕ Tambah User</h1>

        <p class="subtitle">
          Tambahkan data user menggunakan ReqRes API
        </p>

        <form @submit.prevent="saveUser">

          <div class="form-group">
            <label>Nama</label>
            <input
              type="text"
              v-model="name"
              placeholder="Masukkan nama"
              required
            />
          </div>

          <div class="form-group">
            <label>Pekerjaan</label>
            <input
              type="text"
              v-model="job"
              placeholder="Masukkan pekerjaan"
              required
            />
          </div>

          <button type="submit">
            Simpan User
          </button>

        </form>

        <div
          v-if="message"
          class="success"
        >
          {{ message }}
        </div>

      </div>

    </div>

  </Layout>
</template>

<script setup>
import { ref } from "vue";
import Layout from "../layouts/Layout.vue";
import api from "../services/api";

const name = ref("");
const job = ref("");
const message = ref("");

const saveUser = async () => {

  try {

    const response = await api.post("/users", {
      name: name.value,
      job: job.value,
    });

    message.value =
      `✅ User berhasil ditambahkan!\nID : ${response.data.id}`;

    name.value = "";
    job.value = "";

  } catch (error) {

    message.value = "❌ Gagal menambahkan user.";

    console.log(error);

  }

};
</script>

<style scoped>

.container{
    display:flex;
    justify-content:center;
    margin-top:40px;
}

.card{

    width:500px;

    background:white;

    padding:35px;

    border-radius:15px;

    box-shadow:0 8px 20px rgba(0,0,0,.15);

}

h1{

    color:#2563eb;

    margin-bottom:10px;

}

.subtitle{

    color:#666;

    margin-bottom:30px;

}

.form-group{

    margin-bottom:20px;

}

label{

    display:block;

    margin-bottom:8px;

    font-weight:bold;

}

input{

    width:100%;

    padding:12px;

    border:1px solid #ccc;

    border-radius:8px;

    font-size:15px;

}

input:focus{

    outline:none;

    border-color:#2563eb;

}

button{

    width:100%;

    padding:14px;

    background:#2563eb;

    color:white;

    border:none;

    border-radius:8px;

    font-size:16px;

    cursor:pointer;

}

button:hover{

    background:#1d4ed8;

}

.success{

    margin-top:20px;

    background:#dcfce7;

    color:#166534;

    padding:15px;

    border-radius:8px;

    font-weight:bold;

}

</style>