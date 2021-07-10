<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <div class="jumbotron text-center">
          <h1 class="lead title">Find couples here!</h1>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="jumbotron jumbotron-main mb-4">
          <!-- <div v-for="(user, key) in users" :key="key" class="card profiles">
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
          </div> -->
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="userProfile"
    tabindex="-1"
    aria-labelledby="userProfileLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{
              activeProfile.user1.firstName +
                ' ' +
                activeProfile.user1.lastName +
                ' and ' +
                activeProfile.user2.firstName +
                ' ' +
                activeProfile.user2.lastName
            }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body conatiner-fluid">
          <div class="row">
            <div class="col">
              {{ activeProfile.profile.details }}
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-6 offset-3">
              <h4 class="text-center">Interests</h4>
              <ul>
                <li v-for="(interest, key) in activeProfile.profile.interests" :key="key">
                  {{ interest.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Befriend</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Home.ts" />
<style lang="scss" src="./Home.scss" scoped />
