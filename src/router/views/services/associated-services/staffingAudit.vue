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
    <li>Кадровый аудит</li>
  </BreadCrumbs>

  <main>
    <h1>Кадровый аудит <span>от 50 000₽</span></h1>

    <section>
      <article>
        <p>
          Кадровый аудит – проверка кадровой документации на предмет соответствия действующему
          законодательству и внутренним требованиям компании.
        </p>
        <br />

        <ul>
          Кадровый аудит обычно проводят в следующих случаях:
          <li>при предстоящей проверке;</li>
          <li>при смене специалиста по кадрам;</li>
          <li>при смене руководства компании;</li>
          <li>при изменении законодательства.</li>
        </ul>
        <br />

        <p>
          Кадровый аудит предполагает проверку наличия обязательных кадровых документов и проверку
          правильности оформления документов.
        </p>
        <br />

        <p>
          По итогам кадрового аудита составляется отчет. В отчете по кадровому аудиту будут
          отображены выявленные ошибки и меры, необходимые для устранения данных ошибок, будут
          сформированы выводы о состоянии кадрового учета, а также будут представлены рекомендации
          для снижения рисков в системе трудовых отношений.
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
