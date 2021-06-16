<template>
  <Nav v-if="isAuthenticated" />
  <router-view />
  <Footer />
</template>

<script lang="ts" src="./App.ts" />
<style lang="scss" src="./App.scss" />
