<template>
  <div class="container mt-4">
    <div class="mb-5">
      <h1 class="mb-0">Profile</h1>
      <small>
        <router-link :to="'/user/' + account.id" class="router-link"
          >Update Account</router-link
        >
      </small>
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
      <h2 class="mt-4">Passions</h2>
      <SearchAddRemove
        title="Sports"
        :list="passions.sports"
        :returns="account.profile.passions.sports"
        class="mt-3"
      />
      <SearchAddRemove
        title="Arts"
        :list="passions.arts"
        :returns="account.profile.passions.arts"
        class="mt-3"
      />
      <SearchAddRemove
        title="Hobbies"
        :list="passions.hobbies"
        :returns="account.profile.passions.hobbies"
        class="mt-3"
      />
      <button class="btn btn-primary mt-3" v-on:click="updateProfile">
        Update
      </button>
    </form>
  </div>
</template>

<script lang="ts" src="./Profile.ts" />
<style lang="scss" src="./Profile.scss" scoped />
