<template>
  <div class="container">
    <h1>Login</h1>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <button class="btn btn-primary mt-4" v-on:click="login">Login</button>
    </form>
    <p class="mt-5">New user?</p>
    <router-link to="/user/register">Click here!</router-link>
  </div>
</template>

<script lang="ts" src="./Login.ts" />
<style lang="scss" src="./Login.scss" scoped />
