<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-8 offset-sm-2 col-lg-4 offset-lg-3">
        <h1 class="mt-4">Register</h1>
        <form
          class="my-3"
          :class="submit ? 'was-validated' : null"
          novalidate
          v-on:submit="register"
          oninput="up2.setCustomValidity(up2.value != up.value ? 'Invalid' : '')"
        >
          <div class="form-floating input-group-sm mb-3">
            <input
              type="email"
              class="form-control"
              id="registerEmail"
              placeholder="email@example.com"
              aria-describedby="email"
              v-model="email"
              required
            />
            <label for="registerEmail">Email</label>
            <div class="invalid-feedback">
              Please enter an email address.
            </div>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="registerPassword"
              placeholder="Password"
              pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
              name="up"
              v-model="password"
              required
            />
            <label for="registerPassword">Password</label>
            <div class="invalid-feedback">
              Please enter a password. Must contain at least one letter, one number and one
              special character and be at least eight characters long.
            </div>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="registerConfirmPassword"
              placeholder="Confirm Password"
              name="up2"
              v-model="passwordConfirm"
              required
            />
            <label for="registerConfirmPassword">Confirm Password</label>
            <div class="invalid-feedback">
              Passwords must match.
            </div>
          </div>
          <div class="row" v-if="showFirst">
            <div class="col-12">
              <h4>First User</h4>
            </div>
            <div class="col-12 col-sm-6">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  id="firstName1"
                  v-model="firstName1"
                  required
                />
                <label for="firstName1">First Name</label>
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  id="lastName1"
                  v-model="lastName1"
                  required
                />
                <label for="lastName1">Last Name</label>
              </div>
            </div>
          </div>
          <div class="row" v-if="showSecond">
            <div class="col-12">
              <h4>Second User</h4>
            </div>
            <div class="col-12 col-sm-6">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  id="firstName2"
                  v-model="firstName2"
                  required
                />
                <label for="firstName2">First Name</label>
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  id="lastName2"
                  v-model="lastName2"
                  required
                />
                <label for="lastName2">Last Name</label>
              </div>
            </div>
          </div>
          <button class="btn btn-primary" v-on:click="show" v-if="!showSecond">
            Next
          </button>
          <button type="submit" class="btn btn-primary btn-lg" v-if="showFirst && showSecond">
            Register
          </button>
        </form>
        <p>Already have an account?</p>
        <router-link to="/user/login">Click here!</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Register.ts" />
<style lang="scss" src="./Register.scss" scoped />
