<template>
  <span class="position-relative">
    <span class="bannerText">
      <p class="bannerTextHeader">Paarre</p>
      <p class="bannerTextBody">Couples Find Couples</p>
      <button type="button" class="btn btn-light bannerButton">
        <router-link to="/user/register">Get Started!</router-link>
      </button>
    </span>
    <picture class="banner">
      <source
        media="(min-width:768px)"
        srcset="@/assets/images/friends3.jpg"
        class="bannerImage"
      />
      <source srcset="@/assets/images/tall-friends.jpg" class="bannerImage" />
      <img src="@/assets/images/tall-friends.jpg" class="bannerImage" alt="Friends" />
    </picture>
  </span>
  <Footer />
</template>

<script lang="ts" src="./Landing.ts" />
<style lang="scss" src="./Landing.scss" scoped />
