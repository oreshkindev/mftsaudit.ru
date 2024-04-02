<script setup>
import { RouterLink } from 'vue-router'
import { useStore } from 'vuex'
//
const store = useStore()
</script>

<template>
  <footer>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">
            <svg width="80" height="60">
              <use xlink:href="@/assets/images/sprites.svg#icon"></use>
            </svg>
          </RouterLink>
        </li>
        <li>Карта сайта</li>
        <li>
          <RouterLink to="/terms-and-conditions">Политика обработки персональных данных</RouterLink>
        </li>
        <li>
          <a href="/doc/politika-v-otnoshenii-obrabotki-personalnyh-dannyh.docx" target="_blank"
            >Политика в отношении обработки персональных данных</a
          >
        </li>
      </ul>

      <ul>
        <li>
          <RouterLink to="/about/our-history">История компании</RouterLink>
        </li>
        <li>
          <RouterLink to="/about/credentials-and-certificates"
            >Свидетельства и аттестаты</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/about/our-clients">Наши клиенты</RouterLink>
        </li>
      </ul>

      <ul>
        <li>
          <RouterLink to="/services/audit-services">Аудит</RouterLink>
        </li>
        <li>
          <RouterLink to="/services/associated-services">Сопутствующие услуги</RouterLink>
        </li>
        <li>
          <RouterLink to="/services/other-services">Прочие услуги</RouterLink>
        </li>
      </ul>

      <ul>
        <li>Россия, 400005, г. Волгоград, ул. 7-й Гвардейской, д. 15, ком. 14</li>
        <li>Тел.: 8 800 101-6034</li>
        <li>Почта: info@mftsaudit.ru</li>
        <li>
          <a href="#" v-on:click.prevent="store.state.dialogForm = true">Консультация</a>
        </li>
      </ul>
    </nav>

    <p>
      <small>© 2014-2023 ООО «МФЦ АУДИТ»</small>
    </p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: var(--vt-c-theme);
  display: grid;
  grid-template: auto / 1fr;
  position: sticky;
  top: 100%;

  nav {
    display: inherit;
    gap: var(--vt-s-gap);
    grid-template: auto / repeat(4, 1fr);
    margin: auto;
    max-width: var(--vt-s-width);
    padding: var(--vt-s-gap);

    ul {
      &:first-of-type {
        li {
          a {
            display: inline-block;
          }
        }
      }
    }
  }

  p {
    margin: auto;
    padding: 20px var(--vt-s-gap);
    opacity: 0.2;
  }
}

/* 
Use a media query to add a breakpoint at 826px:
*/

@media only screen and (max-width: 826px) {
  footer {
    nav {
      grid-template: auto / 1fr;
    }
  }
}
</style>
