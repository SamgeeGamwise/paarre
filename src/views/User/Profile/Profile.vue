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
      <div class="form-group mt-3">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#interestsModel"
        >
          Edit Interests
        </button>
      </div>
    </form>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="interestsModel" tabindex="-1">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modify your interests</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <SearchAddRemove :interests="account.profile.interests" class="mt-3" />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            v-on:click="updateInterests"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Profile.ts" />
<style lang="scss" src="./Profile.scss" scoped />
