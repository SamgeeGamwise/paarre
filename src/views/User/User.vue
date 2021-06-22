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
      <h5 class="mb-3">First User</h5>
      <hr />
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label for="firstName1">First Name</label>
            <input
              type="text"
              class="form-control"
              id="firstName1"
              placeholder="First name"
              v-model="account.user1.firstName"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="lastName1">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lastName1"
              placeholder="Last name"
              v-model="account.user1.lastName"
            />
          </div>
        </div>
      </div>
      <div class="form-group mt-3">
        <label for="email1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="account.user1.email"
        />
      </div>
      <h5 class="mt-5 mb-3">Second User</h5>
      <hr />
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label for="firstName2">First Name</label>
            <input
              type="text"
              class="form-control"
              id="firstName2"
              placeholder="First name"
              v-model="account.user2.firstName"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="lastName2">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lastName2"
              placeholder="Last name"
              v-model="account.user2.lastName"
            />
          </div>
        </div>
      </div>
      <div class="form-group mt-3">
        <label for="email2">Email address (Optional)</label>
        <input
          type="email"
          class="form-control"
          id="email2"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="account.user2.email"
        />
      </div>
      <button class="btn btn-primary mt-3" v-on:click="updateUsers">
        Update
      </button>
    </form>
    <form class="mt-5 password-form">
      <h3>Update Password</h3>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password" />
      </div>
      <div class="form-group mt-3">
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          id="confirmPassword"
          placeholder="Confirm Password"
        />
      </div>
      <button class="btn btn-primary mt-3" v-on:click="updatePassword">
        Update
      </button>
    </form>
  </div>
</template>

<script lang="ts" src="./User.ts" />
<style lang="scss" src="./User.scss" scoped />
