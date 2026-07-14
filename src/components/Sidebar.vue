<template>
  <aside class="sidebar">

    <RouterLink to="/">Dashboard</RouterLink>

    <RouterLink to="/users">Daftar User</RouterLink>

    <RouterLink to="/create">Tambah User</RouterLink>

    <RouterLink to="/about">About</RouterLink>

  </aside>
</template>

<style scoped>
.sidebar{
    width:220px;
    min-height:100vh;
    background:#f3f4f6;
    padding:20px;
    display:flex;
    flex-direction:column;
    gap:15px;
}

a{
    text-decoration:none;
    color:#333;
    font-weight:bold;
}

.router-link-active{
    color:#2563eb;
}
</style>