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
      <RouterLink to="/services/associated-services">Сопутствующие услуги</RouterLink>
    </li>
    <li>Компиляция информации</li>
  </BreadCrumbs>

  <main>
    <h1>Компиляция информации <span>Оплата по согласованию</span></h1>

    <section>
      <article>
        <p>
          Компиляция финансовой информации – это сбор, классификация и обобщение финансовой
          информации, а также возможная ее трансформация.
        </p>
        <br />

        <p>
          Процедуры, выполняемые при компиляции, позволяют привести данные в удобную и понятную
          форму.
        </p>
        <br />

        <p>
          По итогам оказания услуг заказчику предоставляется отчет о выполнении компиляции
          финансовой информации по форме, определенной стандартами аудита.
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
