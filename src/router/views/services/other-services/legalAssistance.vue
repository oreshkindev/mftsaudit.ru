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
    <li>Юридическая помощь</li>
  </BreadCrumbs>

  <main>
    <h1>Юридическая помощь <span>Оплата по согласованию</span></h1>

    <section>
      <article>
        <ul>
          Мы оказываем методическую помощь и консультируем при досудебном и судебном урегулировании
          гражданско-правовых споров, споров с государственными органами и органами местного
          самоуправления, в том числе:
          <li>готовим возражения по результатам налоговых проверок;</li>
          <li>составляем исковые заявления в суд и апелляционные жалобы в вышестоящие органы.</li>
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
