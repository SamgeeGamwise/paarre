<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import Nav from './views/_components/Nav/Nav.vue';
import Footer from './views/_components/Footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Nav,
    Footer,
  },
};
</script>
<style lang="scss" src="./App.scss" />
