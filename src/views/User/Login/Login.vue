<template>
  <div class="container">
    <h1>Login</h1>
    <button v-on:click="login">Login</button>
    <p>New user?</p>
    <router-link to="/user/register">Click here!</router-link>
  </div>
</template>

<script lang="ts" src="./Login.ts" />
<style lang="scss" src="./Login.scss" scoped />
