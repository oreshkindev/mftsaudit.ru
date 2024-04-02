<script setup></script>

<template>
  <aside>
    <nav>
      <ul>
        <slot />
      </ul>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  nav {
    margin: auto;
    max-width: var(--vt-s-width);
    padding: var(--vt-s-gap);

    ul {
      display: flex;
      flex-wrap: wrap;

      :deep(li) {
        &::after {
          content: '/';
          margin: 0 20px;
        }

        &:last-of-type {
          opacity: 0.2;

          &::after {
            content: none;
          }
        }

        a {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
