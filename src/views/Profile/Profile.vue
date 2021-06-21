<template>
  <div class="container">
    <h1>Welcome {{ user.firstName + ' ' + user.lastName }}</h1>
    <h2>This is your Profile page</h2>
    <form class="profile-form">
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label for="exampleInputEmail1">First Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              v-model="userForm.firstName"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="exampleInputEmail1">Last Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              v-model="userForm.lastName"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="userForm.email"
        />
      </div>
      <button type="submit" class="btn btn-primary mt-3" v-on:click="updateUser">
        Submit
      </button>
    </form>
  </div>
</template>

<script lang="ts" src="./Profile.ts" />
<style lang="scss" src="./Profile.scss" scoped />
