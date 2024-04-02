<script setup>
import { ref, provide } from 'vue'

const active = ref(false)

provide('sharedState', active)
</script>

<template>
  <li @click="active = !active" :class="{ active: active }" v-outside="() => (active = false)">
    <slot />
  </li>
</template>

<style lang="scss">
li {
  line-height: 2;
  span {
    cursor: pointer;

    &::after {
      border-bottom: 1.2px solid;
      border-left: 1.2px solid;
      content: '';
      display: inline-block;
      height: 9px;
      inset: -3px -10px auto auto;
      position: relative;
      transform: rotate(-45deg);
      width: 9px;
    }
  }

  &.active {
    span {
      &::after {
        border-left: 0;
        inset: -5px -10px auto auto;
        transform: rotate(0deg);
      }
    }
  }
}
</style>
