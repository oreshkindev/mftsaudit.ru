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
    <li>Налоговый аудит</li>
  </BreadCrumbs>

  <main>
    <h1>Налоговый аудит <span>от 50 000₽</span></h1>

    <section>
      <article>
        <p>
          Налоговый аудит – это оценка хозяйственной деятельности компании с точки зрения
          соответствия установленным нормам законодательства в сфере налогообложения.
        </p>
        <br />

        <p>
          Целью налогового аудита является снижение налоговых рисков, финансовых потерь организации
          от штрафов и иных санкций.
        </p>
        <br />

        <p>
          Как правило, потребность в налоговом аудите возникает после того, как в ходе аудиторской
          проверки или в ходе консультации выясняется наличие проблем, связанных с налогообложением
          и организацией налогового учета.
        </p>
        <br />

        <p>
          Результатом налогового аудита является оценка налоговых рисков компании и сведение их к
          минимуму на основе профессиональных рекомендаций.
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
