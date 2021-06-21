<template>
  <span class="position-relative">
    <span class="bannerText">
      <p class="bannerTextHeader">Paarre</p>
      <p class="bannerTextBody">Couples Find Couples</p>
      <button type="button" class="btn btn-light bannerButton" v-on:click="login">
        Get Started!
      </button>
    </span>
    <picture class="banner">
      <source media="(min-width:768px)" :srcset="constants.FRIENDS" class="bannerImage" />
      <source :srcset="constants.FRIENDS_MOBILE" class="bannerImage" />
      <img :src="constants.FRIENDS_MOBILE" class="bannerImage" alt="Friends" />
    </picture>
  </span>
  <Footer />
</template>

<script lang="ts" src="./Landing.ts" />
<style lang="scss" src="./Landing.scss" scoped />
