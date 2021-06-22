<template>
  <div class="form-group">
    <h4>{{ title }}</h4>
    <input
      v-model="searchVal"
      v-on:change="search"
      class="form-control"
      placeholder="Search"
    />
    <div class="row mt-3">
      <div class="col">
        <h6>Add new</h6>
        <select multiple readonly class="form-control select">
          <option v-for="(item, key) in searchList" :key="key" v-on:dblclick="add(item)">
            {{ item }}</option
          >
        </select>
      </div>
      <div class="col">
        <h6>Remove</h6>
        <select multiple readonly class="form-control selected">
          <option v-for="(item, key) in returns" :key="key" v-on:dblclick="remove(item)">
            {{ item }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./SearchAddRemove.ts" />
<style lang="scss" src="./SearchAddRemove.scss" scoped />
