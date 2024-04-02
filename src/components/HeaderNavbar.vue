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
            <RouterLink to="/reports/public/report2017">Отчет за 2017 год</RouterLink>
          </li>
          <li>
            <RouterLink to="/reports/public/report2018">Отчет за 2018 год</RouterLink>
          </li>
          <li>
            <RouterLink to="/reports/public/report2019">Отчет за 2019 год</RouterLink>
          </li>
          <li>
            <RouterLink to="/reports/public/report2020">Отчет за 2020 год</RouterLink>
          </li>
          <li>
            <RouterLink to="/reports/public/report2021">Отчет за 2021 год</RouterLink>
          </li>
          <li>
            <RouterLink to="/reports/public/report2022">Отчет за 2022 год</RouterLink>
          </li>
          <li>
            <RouterLink to="/reports/public/report2023">Отчет за 2023 год</RouterLink>
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
