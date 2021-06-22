<template>
  <Nav v-if="!isLanding" />
  <router-view />
  <Footer v-if="isLanding" />
</template>

<script lang="ts" src="./App.ts" />
<style lang="scss" src="./App.scss" />
