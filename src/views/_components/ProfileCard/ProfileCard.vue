<template>
  <div v-for="(user, key) in users" :key="key" class="card profiles">
    <img src="/images/people.png" class="card-img-top" alt="Avatar" />
    <div class="card-body">
      <h3 class="card-title">
        {{ user.user1.firstName + ' & ' + user.user2.firstName }}
      </h3>
      <p class="card-text">
        {{ user.profile.details }}
      </p>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#userProfile"
        v-on:click="setProfile(user)"
      >
        View Profile
      </button>
    </div>
  </div>
</template>
