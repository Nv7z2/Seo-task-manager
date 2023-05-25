<template>
  <div class="login-view">
    <h1>Login</h1>
    <form class="login-form" @submit.prevent>
      <input type="text" placeholder="Username" class="form-field">
      <input type="password" placeholder="Password" class="form-field">
      <input type="submit" value="Login to your account 🚀" class="form-button" />
    </form>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.login-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.form-field {
  width: 20rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.form-button {
  width: 20rem;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: #000;
  color: #fff;
  cursor: pointer;
}
</style>