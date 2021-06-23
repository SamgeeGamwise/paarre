<template>
  <div class="container mt-4">
    <div class="mb-3">
      <h1 class="mb-0">Profile</h1>
      <small>
        <router-link :to="'/user/' + account.id" class="router-link d-block"
          >Update Account</router-link
        >
      </small>
      <button class="btn btn-secondary mt-5 px-5" v-on:click="updateProfile">
        Update Profile
      </button>
    </div>
    <form class="profile-form">
      <div class="form-group">
        <h2>About Us</h2>
        <textarea
          class="form-control"
          id="aboutUs"
          rows="5"
          v-model="account.profile.details"
        />
      </div>
      <h2 class="mt-4">Interests</h2>
      <SearchAddRemove :interests="account.profile.interests" class="mt-3" />
    </form>
  </div>
</template>

<script lang="ts" src="./Profile.ts" />
<style lang="scss" src="./Profile.scss" scoped />
