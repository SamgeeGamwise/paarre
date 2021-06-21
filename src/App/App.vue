<template>
  <Nav v-if="!isLanding" />
  <router-view />
  <Footer />
</template>

<script lang="ts" src="./App.ts" />
<style lang="scss" src="./App.scss" />
