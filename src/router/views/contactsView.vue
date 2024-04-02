<script setup>
import { RouterLink } from 'vue-router'
import { YandexMap, YandexMarker } from 'vue-yandex-maps'
import BreadCrumbs from '@/components/BreadCrumbs.vue'

const settings = {
  apiKey: '4a61d4e6-4c3c-48a9-87cc-a4903f81fa46', // Индивидуальный ключ API
  lang: 'ru_RU', // Используемый язык
  coordorder: 'latlong', // Порядок задания географических координат
  debug: false, // Режим отладки
  version: '2.1' // Версия Я.Карт
}

const coordinates = [48.722331, 44.53217]
</script>

<template>
  <BreadCrumbs>
    <li>
      <RouterLink to="/">Главная</RouterLink>
    </li>
    <li>Контакты</li>
  </BreadCrumbs>

  <main>
    <h1>Наши контакты</h1>

    <section>
      <article>
        <ul>
          <li>Россия, 400005, г. Волгоград, ул. 7-й Гвардейской, д. 15, ком. 14</li>

          <li>
            Тел.:
            <a href="tel:88001016034">8 800 101-6034</a>
          </li>

          <li>
            Почта:
            <a href="mailto:info@mftsaudit.ru">info@mftsaudit.ru</a>
          </li>
        </ul>

        <YandexMap
          :settings="settings"
          :zoom="18"
          :controls="[]"
          :coordinates="coordinates"
          style="width: 100%; height: 400px"
        >
          <!--Markers-->
          <YandexMarker
            :coordinates="coordinates"
            :marker-id="123"
            :options="{ preset: 'islands#blackStretchyIcon' }"
          />
        </YandexMap>
      </article>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  ul {
    margin: var(--vt-s-gap);

    li {
      list-style: disc;
    }
  }
}

.yandex-container {
  filter: grayscale(1);
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: grayscale(0);
  }
}
</style>
