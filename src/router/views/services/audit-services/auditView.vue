<script setup>
import { RouterLink } from 'vue-router'
import BreadCrumbs from '@/components/BreadCrumbs.vue'
</script>

<template>
  <BreadCrumbs>
    <li>
      <RouterLink to="/">Главная</RouterLink>
    </li>
    <li>Аудит</li>
  </BreadCrumbs>

  <main>
    <h1>Аудит</h1>

    <section>
      <article>
        <h3>Обязательный аудит</h3>
        <p>
          Обязательный аудит – это независимая проверка бухгалтерской (финансовой) отчетности
          аудируемого лица, проводимая в соответствии с требованиями Федерального закона от
          30.12.2008 N 307-ФЗ «Об аудиторской деятельности».
        </p>
        <br />

        <RouterLink to="/services/audit-services/audit-statutory">Подробнее</RouterLink>
      </article>

      <article>
        <h3>Инициативный аудит</h3>
        <p>
          Инициативный аудит – это независимая проверка состояния бухгалтерского учета и финансовой
          (бухгалтерской) отчетности, проводимая по инициативе самой организации.
        </p>
        <br />

        <RouterLink to="/services/audit-services/audit-initiative">Подробнее</RouterLink>
      </article>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  section {
    display: grid;
    gap: var(--vt-s-gap);
    grid-template: auto / repeat(auto-fit, minmax(272px, auto));

    article {
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

      a {
        background-color: #e9e9ed;
        display: inline-block;
        margin: 20px 0;
        padding: 12px var(--vt-s-gap);

        &:hover {
          background-color: #d4d4d4;
        }
      }
    }
  }
}
</style>
