<template>
  <div class="form-group">
    <input v-model="searchVal" v-on:keyup="search" class="form-control" placeholder="Search" />
    <div class="row mt-3">
      <div class="col">
        <h6>Add new</h6>
        <select multiple readonly class="form-control select">
          <option
            v-for="(item, key) in searchList"
            :key="key"
            :disabled="item.type === 'category'"
            v-on:dblclick="add(item)"
          >
            {{ item.name }}</option
          >
        </select>
      </div>
      <div class="col">
        <h6>Remove</h6>
        <select multiple readonly class="form-control select">
          <option
            v-for="(item, key) in props.interests"
            :key="key"
            :disabled="item.type === 'category'"
            v-on:dblclick="remove(item)"
          >
            {{ item.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./SearchAddRemove.ts" />
<style lang="scss" src="./SearchAddRemove.scss" scoped />
