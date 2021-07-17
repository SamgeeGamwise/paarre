<template>
  <div class="container mt-4">
    <div class="mb-5">
      <h1 class="mb-0">Account</h1>
      <small>
        <router-link :to="'/user/' + account.id + '/profile/'" class="router-link"
          >Update Profile</router-link
        >
      </small>
    </div>
    <form class="profile-form">
      <div class="row">
        <div class="col">
          <div class="form-group mt-3">
            <label for="userEmail">Email Address</label>
            <input
              type="email"
              class="form-control"
              id="userEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="account.email"
            />
          </div>
        </div>
        <h5 class="mt-4 mb-3">First User</h5>
        <div class="col">
          <div class="input-group">
            <span class="input-group-text">First and last name</span>
            <input
              type="text"
              aria-label="First name"
              class="form-control"
              v-model="account.user1.firstName"
            />
            <input
              type="text"
              aria-label="Last name"
              class="form-control"
              v-model="account.user1.lastName"
            />
          </div>
        </div>
      </div>
      <h5 class="mt-4 mb-3">Second User</h5>
      <div class="row">
        <div class="col">
          <div class="input-group">
            <span class="input-group-text">First and last name</span>
            <input
              type="text"
              aria-label="First name"
              class="form-control"
              v-model="account.user2.firstName"
            />
            <input
              type="text"
              aria-label="Last name"
              class="form-control"
              v-model="account.user2.lastName"
            />
          </div>
        </div>
      </div>
      <button class="btn btn-secondary mt-3" v-on:click="updateUsers">
        Update Account
      </button>
    </form>
    <form class="mt-5 password-form">
      <h3>Update Password</h3>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="form-group mt-3">
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          id="confirmPassword"
          placeholder="Confirm Password"
          v-model="passwordConfirm"
        />
      </div>
      <button class="btn btn-secondary mt-3" v-on:click="updatePassword">
        Update Password
      </button>
    </form>
  </div>
</template>

<script lang="ts" src="./User.ts" />
<style lang="scss" src="./User.scss" scoped />
