<template>
  <div class="container">
    <h1>Register</h1>
    <button v-on:click="register">Register</button>
    <p>Already have an account?</p>
    <router-link to="/user/login">Click here!</router-link>
  </div>
</template>

<script lang="ts" src="./Register.ts" />
<style lang="scss" src="./Register.scss" scoped />
