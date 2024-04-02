<script setup>
import { useStore } from 'vuex'
import { RouterLink } from 'vue-router'
import BreadCrumbs from '@/components/BreadCrumbs.vue'
const store = useStore()
</script>

<template>
  <BreadCrumbs>
    <li>
      <RouterLink to="/">Главная</RouterLink>
    </li>
    <li>
      <RouterLink to="/services/other-services">Прочие услуги</RouterLink>
    </li>
    <li>Консультирование в области бухгалтерского учета и налогообложения</li>
  </BreadCrumbs>

  <main>
    <h1>
      Консультирование в области бухгалтерского учета и налогообложения <span>от 1200₽./час</span>
    </h1>

    <section>
      <article>
        <p>
          Услуга заключается в предоставление консультаций по запросам клиента в объеме,
          предусмотренном договором.
        </p>
        <br />

        <p>
          Целью консультирования является оперативная помощь клиенту для предотвращения возможных
          ошибок в процессе работы и сокращение временных затрат на решение текущих вопросов.
        </p>
        <br />

        <p>
          Мы подробно изучаем ситуацию и рассматриваем относящиеся к ней документы и формируем ответ
          с учетом всех аспектов, включая возможные гражданско-правовые и налоговые риски.
        </p>
        <br />

        <p>
          Консультирование осуществляется как в устной форме, так и в письменной (с подготовкой
          письменного заключения).
        </p>

        <br />
        <br />

        <a href="#" @click.prevent="store.state.dialogForm = true">Консультация</a>
      </article>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  h1 {
    span {
      display: block;
      font-size: 16px;
      opacity: 0.6;
    }
  }

  section {
    article {
      a {
        background-color: #e9e9ed;
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
