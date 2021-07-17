<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-8 offset-sm-2 col-lg-4 offset-lg-3">
        <h1 class="mt-4">Login</h1>
        <form
          class="my-3 needs-validation"
          :class="submit ? 'was-validated' : null"
          v-on:submit="login"
          novalidate
        >
          <div class="form-floating input-group-sm mb-3">
            <input
              type="email"
              class="form-control"
              id="loginEmail"
              placeholder="email@example.com"
              aria-describedby="email"
              v-model="email"
              required
            />
            <label for="loginEmail">Email</label>
            <div class="invalid-feedback">
              Please enter your email address.
            </div>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="loginPassword"
              placeholder="Password"
              v-model="password"
              required
            />
            <label for="loginPassword">Password</label>
            <div class="invalid-feedback">
              Please enter your password.
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-lg">
            Login
          </button>
        </form>
        <p>New user?</p>
        <router-link to="/user/register">Click here!</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Login.ts" />
<style lang="scss" src="./Login.scss" scoped />
