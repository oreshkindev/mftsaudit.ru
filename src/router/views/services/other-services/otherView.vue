<script setup>
import { RouterLink } from 'vue-router'
import BreadCrumbs from '@/components/BreadCrumbs.vue'
</script>

<template>
  <BreadCrumbs>
    <li>
      <RouterLink to="/">Главная</RouterLink>
    </li>
    <li>Прочие услуги</li>
  </BreadCrumbs>

  <main>
    <h1>Прочие услуги</h1>

    <section>
      <article>
        <h3>Услуги в области бухгалтерского учета и налогообложения</h3>
        <p>
          Мы предоставляем комплекс услуг, связанный с постановкой и ведением бухгалтерского и
          налогового учета
        </p>
        <br />

        <RouterLink to="/services/other-services/tax-services">Подробнее</RouterLink>
      </article>

      <article>
        <h3>Консультирование в области бухгалтерского учета и налогообложения</h3>
        <p>
          Услуга заключается в предоставление консультаций по запросам клиента в объеме,
          предусмотренном договором.
        </p>
        <br />

        <RouterLink to="/services/other-services/tax-consulting">Подробнее</RouterLink>
      </article>

      <article>
        <h3>Юридическая помощь</h3>
        <p>
          Мы оказываем методическую помощь и консультируем при досудебном и судебном урегулировании
          гражданско-правовых споров, споров с государственными органами и органами местного
          самоуправления.
        </p>
        <br />

        <RouterLink to="/services/other-services/legal-assistance">Подробнее</RouterLink>
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
