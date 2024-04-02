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
    <li>Услуги в области бухгалтерского учета и налогообложения</li>
  </BreadCrumbs>

  <main>
    <h1>Услуги в области бухгалтерского учета и налогообложения <span>от 1200₽./час</span></h1>

    <section>
      <article>
        <ul>
          Мы предоставляем комплекс услуг, связанный с постановкой и ведением бухгалтерского и
          налогового учета, включая:

          <li>
            ведение бухгалтерского и налогового учёта в полном объеме, составление и сдача
            бухгалтерской и налоговой отчетности;
          </li>
          <li>постановка бухгалтерского и налогового учета;</li>
          <li>восстановление бухгалтерского учета;</li>
          <li>ведение отдельных участков бухгалтерского учёта;</li>
          <li>
            разработка методологии бухгалтерского и налогового учета в соответствии с
            законодательством РФ.
          </li>
        </ul>

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
