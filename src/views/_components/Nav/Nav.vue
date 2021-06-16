<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary border-bottom">
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
          <!-- <li class="nav-item d-md-none">
            <router-link to="/profile" class="nav-link lead links">Profile</router-link>
          </li> -->
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
              <!-- <router-link to="/profile" class="dropdown-item lead links">Profile</router-link> -->
              <div class="dropdown-divider" />
              <div v-on:click="logout" class="dropdown-item lead links">Logout</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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
