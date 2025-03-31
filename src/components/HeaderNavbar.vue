<script setup>
import { RouterLink } from 'vue-router'
import DropdownContent from './DropdownContent.vue'
import DropdownItem from './DropdownItem.vue'
</script>

<template>
  <nav>
    <ul>
      <DropdownItem>
        <span>О компании</span>

        <DropdownContent>
          <li>
            <RouterLink to="/about/our-history">История компании</RouterLink>
          </li>
          <li>
            <RouterLink to="/about/our-documents">Документы</RouterLink>
          </li>
          <li>
            <RouterLink to="/about/our-clients">Наши клиенты</RouterLink>
          </li>
        </DropdownContent>
      </DropdownItem>

      <DropdownItem>
        <span>Услуги</span>

        <DropdownContent>
          <li>
            <RouterLink to="/services/audit-services">Аудит</RouterLink>
          </li>
          <li>
            <RouterLink to="/services/associated-services">Сопутствующие услуги</RouterLink>
          </li>
          <li>
            <RouterLink to="/services/other-services">Прочие услуги</RouterLink>
          </li>
        </DropdownContent>
      </DropdownItem>

      <DropdownItem>
        <span>Раскрытие информации</span>

        <DropdownContent>
          <li>
            <a href="https://mftsaudit.ru/doc/2017-otchet.pdf" download>2017 год</a>
          </li>
          <li>
            <a href="https://mftsaudit.ru/doc/2018-otchet.pdf" download>2018 год</a>
          </li>
          <li>
            <a href="https://mftsaudit.ru/doc/2019-otchet.pdf" download>2019 год</a>
          </li>
          <li>
            <a href="https://mftsaudit.ru/doc/2020-otchet.pdf" download>2020 год</a>
          </li>
          <li>
            <a href="https://mftsaudit.ru/doc/2021-otchet.pdf" download>2021 год</a>
          </li>
          <li>
            <a href="https://mftsaudit.ru/doc/2022-otchet.pdf" download>2022 год</a>
          </li>
          <li>
            <a href="https://mftsaudit.ru/doc/2023-otchet.pdf" download>2023 год</a>
          </li>
          <li>
            <a href="https://mftsaudit.ru/doc/2024-otchet.pdf" download>2024 год</a>
          </li>
        </DropdownContent>
      </DropdownItem>

      <li>
        <RouterLink to="/contacts">Контакты</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  ul {
    display: grid;
    gap: var(--vt-s-gap);
    grid-template: auto / repeat(4, auto);
  }
}

/*
Use a media query to add a breakpoint at 826px:
*/

@media only screen and (max-width: 826px) {
  nav {
    ul {
      gap: 10px;
      grid-template: auto / 1fr;
      padding: 20px 0;

      ul {
        padding: 0;
      }
    }
  }
}
</style>
