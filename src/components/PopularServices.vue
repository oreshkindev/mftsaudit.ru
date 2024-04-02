<script setup></script>

<template>
  <section>
    <slot />
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  gap: var(--vt-s-gap);
  grid-template: auto / repeat(auto-fit, minmax(280px, auto));

  p {
    grid-column: 1 / 2;
  }

  :deep(article) {
    background-color: var(--vt-c-theme);
    padding: var(--vt-s-gap);

    h3 {
      font-size: inherit;
      font-weight: 500;
      margin: 0 0 10px;
    }

    p {
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      overflow: hidden;
    }

    &:hover {
      background-color: #f5f7fa;
    }
  }
}
</style>
