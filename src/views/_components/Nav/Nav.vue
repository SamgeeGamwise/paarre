<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary border-bottom">
    <div class="container-fluid">
      <router-link :to="isAuthenticated ? '/' : '/landing'" class="navbar-brand">
        <img :src="constants.LOGO" style="height: 50px;" alt="Paarre" />
      </router-link>
      <input
        type="text"
        class="d-none d-md-block globalSearch"
        placeholder="Search"
        v-if="isAuthenticated"
      />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link to="/user/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link to="/user/register" class="nav-link">Register</router-link>
          </li>
          <li class="nav-item dropdown" v-if="isAuthenticated">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
            >
              {{
                account ? account.user1.firstName + ' & ' + account.user2.firstName : 'Account'
              }}
            </a>
            <ul
              class="dropdown-menu"
              style="right: 0; left: auto;"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <router-link
                  :to="'/user/' + account.id + '/profile/'"
                  class="dropdown-item links"
                >
                  Profile
                </router-link>
              </li>
              <li>
                <router-link :to="'/user/' + account.id" class="dropdown-item links">
                  My Account
                </router-link>
              </li>
              <div class="dropdown-divider"></div>
              <li>
                <div v-on:click="logout" class="dropdown-item links">Logout</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-primary border-bottom">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img src="/images/paarre-v4.png" height="50px" alt="Paarre" />
      </router-link>
      <input type="text" class="d-none d-md-block globalSearch" placeholder="Search" />

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item d-md-none">
            <router-link to="/profile" class="nav-link lead links">Profile</router-link>
          </li>
          <li class="nav-item  d-md-none">
            <div v-on:click="logout" class="nav-link lead links">Logout</div>
          </li>

          <li class="nav-item dropdown d-none d-md-block">
            <a
              class="nav-link h5 mr-5 my-auto"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
            >
              Account
            </a>
            <div class="dropdown-menu">
              <router-link to="/profile" class="dropdown-item lead links">Profile</router-link>
              <div class="dropdown-divider" />
              <div v-on:click="logout" class="dropdown-item lead links">Logout</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
  <!-- 
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Paarre</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/about" class="nav-link lead links">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link lead links">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
</template>

<script lang="ts" src="./Nav.ts" />
<style lang="scss" src="./Nav.scss" scoped />
