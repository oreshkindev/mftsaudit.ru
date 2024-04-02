<script setup>
import { inject } from 'vue'

const processedState = inject('sharedState')
</script>

<template>
  <ul v-if="processedState">
    <slot />
  </ul>
</template>

<style lang="scss" scoped>
ul {
  background-color: #ffffff; //todo
  display: block !important;
  margin: 10px 0;
  padding: 20px var(--vt-s-gap);
  position: absolute;
}

/* 
Use a media query to add a breakpoint at 826px:
*/

@media only screen and (max-width: 826px) {
  ul {
    background-color: unset;
    padding: 0;
    position: relative;

    &:deep(li) {
      &::before {
        content: '– ';
        margin: 0 4px 0 0;
      }
    }
  }
}
</style>
