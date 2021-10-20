<template>
  <span>
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <div class="jumbotron jumbotron-title text-center">
            <h1 class="lead title">Find couples here!</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="jumbotron jumbotron-main mb-4" v-if="loaded">
            <ProfileCard v-for="(user, key) in users" :key="key" :user="user" />
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
  </span>
</template>

<script lang="ts" src="./Home.ts" />
<style lang="scss" src="./Home.scss" scoped />
