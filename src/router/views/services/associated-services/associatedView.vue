<script setup>
import { RouterLink } from 'vue-router'
import BreadCrumbs from '@/components/BreadCrumbs.vue'
</script>

<template>
  <BreadCrumbs>
    <li>
      <RouterLink to="/">Главная</RouterLink>
    </li>
    <li>Сопутствующие услуги</li>
  </BreadCrumbs>

  <main>
    <h1>Сопутствующие услуги</h1>

    <section>
      <article>
        <h3>Обзорная проверка бухгалтерской (финансовой) отчетности</h3>
        <p>
          Обзорная проверка подходит для организаций, которые не нуждаются в проведении аудита
          бухгалтерской (финансовой) отчетности и получении аудиторского заключения стандартной
          формы, но желают выявить возможные существенные искажения такой отчетности. Она позволит
          получить основную информацию о предприятии.
        </p>
        <br />

        <RouterLink to="/services/associated-services/review-of-accounting-statements"
          >Подробнее</RouterLink
        >
      </article>

      <article>
        <h3>Компиляция информации</h3>
        <p>
          Компиляция финансовой информации – это сбор, классификация и обобщение финансовой
          информации, а также возможная ее трансформация.
        </p>
        <br />

        <RouterLink to="/services/associated-services/compiling-information">Подробнее</RouterLink>
      </article>

      <article>
        <h3>Согласованные процедуры</h3>
        <p>
          Согласованные процедуры – это процедуры аудиторского характера, согласованные между
          аудитором и заказчиком.
        </p>
        <br />

        <RouterLink to="/services/associated-services/agreed-procedures">Подробнее</RouterLink>
      </article>

      <article>
        <h3>Налоговый аудит</h3>
        <p>
          Налоговый аудит – это оценка хозяйственной деятельности компании с точки зрения
          соответствия установленным нормам законодательства в сфере налогообложения.
        </p>
        <br />

        <RouterLink to="/services/associated-services/tax-audit">Подробнее</RouterLink>
      </article>

      <article>
        <h3>Кадровый аудит</h3>
        <p>
          Кадровый аудит – проверка кадровой документации на предмет соответствия действующему
          законодательству и внутренним требованиям компании.
        </p>
        <br />

        <RouterLink to="/services/associated-services/staffing-audit">Подробнее</RouterLink>
      </article>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  section {
    display: grid;
    gap: var(--vt-s-gap);
    grid-template: auto / repeat(auto-fit, minmax(472px, auto));

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

/* 
Use a media query to add a breakpoint at 426px:
*/
@media only screen and (max-width: 426px) {
  main {
    section {
      grid-template: auto / repeat(auto-fit, minmax(272px, auto));
    }
  }
}
</style>
