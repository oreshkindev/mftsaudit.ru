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
      <RouterLink to="/services/audit-services">Аудит</RouterLink>
    </li>
    <li>Инициативный аудит</li>
  </BreadCrumbs>

  <main>
    <h1>Инициативный аудит <span>от 40 000₽</span></h1>

    <section>
      <article>
        <p>
          Инициативный аудит – это независимая проверка состояния бухгалтерского учета и финансовой
          (бухгалтерской) отчетности, проводимая по инициативе самой организации.
        </p>
        <br />

        <ul>
          Как правило, инициативный аудит проводят в следующих случаях:
          <li>если имеется прямое указание на проведение аудита в учредительных документах;</li>
          <li>при смене руководства организации;</li>
          <li>при смене бухгалтера или ключевых фигур в бухгалтерии;</li>
          <li>при переходе с одного налогового режима на другой налоговый режим;</li>
          <li>перед налоговыми проверками;</li>
          <li>при приобретении готового бизнеса;</li>
          <li>при реорганизации предприятия;</li>
          <li>
            для выявления и предотвращения корпоративного мошенничества, хищений имущества,
            коррупции и другого ущерба компании;
          </li>
          <li>
            при существенных изменениях в законодательстве, если имеются сомнения в правильности
            ведения отчетности.
          </li>
        </ul>
        <br />

        <p>
          Процедура инициативного аудита практически не отличается от процедуры обязательного
          аудита. По ее завершении организация получает аудиторское заключение.
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
      ul {
        li {
          list-style: disc;
          margin: 0 0 0 40px;
        }
      }

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
