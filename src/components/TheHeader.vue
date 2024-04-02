<script setup>
import HeaderNavbar from '@/components/HeaderNavbar.vue'
import { RouterLink } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
</script>

<template>
  <header v-outside="() => (store.state.navbarHidden = false)">
    <nav>
      <ul>
        <li>
          <a href="tel:88001016034">8 800 101-6034</a>
        </li>
        <li>
          <a href="mailto:info@mftsaudit.ru">info@mftsaudit.ru</a>
        </li>
      </ul>

      <RouterLink to="/">
        <svg width="80" height="60">
          <use xlink:href="@/assets/images/sprites.svg#icon"></use>
        </svg>
      </RouterLink>

      <ul>
        <li>
          <a href="#" v-on:click.prevent="store.state.dialogForm = true">Консультация</a>
        </li>
        <li>Регистрация</li>
      </ul>

      <svg width="32" height="32" v-on:click="store.state.navbarHidden = !store.state.navbarHidden">
        <use xlink:href="@/assets/images/sprites.svg#menu"></use>
      </svg>
    </nav>

    <HeaderNavbar :class="{ active: store.state.navbarHidden }"></HeaderNavbar>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #ffffff;
  box-shadow: 0 4px 4px #151f3208, 0 8px 18px #151f3208;
  position: sticky;
  top: -52px;
  z-index: 9;

  nav {
    display: grid;
    gap: var(--vt-s-gap);
    grid-template: auto / auto 1fr auto;
    margin: auto;
    max-width: var(--vt-s-width);
    padding: 10px var(--vt-s-gap);
    place-items: center;

    &:first-of-type {
      background-color: #ffffff;
      padding: 20px var(--vt-s-gap);
      position: sticky;
      top: 0;
      z-index: 9;
    }

    a {
      line-height: 0;

      svg {
        display: inline-block;
      }
    }

    svg {
      display: none;
    }

    ul {
      display: inherit;
      gap: var(--vt-s-gap);
      grid-template: auto / auto auto;
    }
  }
}

/* 
Use a media query to add a breakpoint at 826px:
*/

@media only screen and (max-width: 826px) {
  header {
    position: relative;
    top: 0;

    nav {
      display: none;

      &.active {
        display: block;
      }

      &:first-of-type {
        box-shadow: 0 4px 4px rgba(21, 31, 50, 0.031372549),
          0 8px 18px rgba(21, 31, 50, 0.031372549);
        display: grid;
        grid-template: auto / 1fr auto;
        padding: 10px var(--vt-s-gap);
        position: relative;

        ul {
          display: none;
        }

        a {
          margin: auto auto auto 0;
        }

        svg {
          cursor: pointer;
          display: inline-block;
        }
      }
    }
  }
}
</style>
