<template>
  <div>
    <h1>This is the Home page</h1>
    <button v-on:click="increment()">Push me!</button>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    increment() {
      this.$store.commit('increment');
      console.log(this.$store.state.count);
    },
  },
};
</script>
<style lang="scss" src="./Home.scss" />
