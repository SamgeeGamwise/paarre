<template>
  <div class="sheet" :class="this.$store.getters.isLoading ? 'd-block' : 'd-none'">
    <div class="center">
      <div class="spinner-grow" role="status"></div>
    </div>
  </div>
  <Nav v-if="!isLanding" />
  <router-view />
  <Footer v-if="isLanding" />
</template>

<script lang="ts" src="./App.ts" />
<style lang="scss" src="./App.scss" />
