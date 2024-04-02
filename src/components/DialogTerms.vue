<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const state = ref(sessionStorage.getItem('m_tc'))

const setState = () => {
  sessionStorage.setItem('m_tc', 'e27877b7-5c2e-4015-b05b-5d5d0446cc12')

  state.value = true
}
</script>

<template>
  <dialog v-if="!state" open="">
    <p>
      Продолжая просмотр настоящего сайта, Вы соглашаетесь с использованием файлов Cookie и иных
      методов, средств и инструментов интернет-статистики и настройки, применяемых на сайте для
      повышения удобства использования сайта, а также, в определенных случаях, для продвижения работ
      и услуг ООО «МФЦ АУДИТ», предоставления информации о предстоящих мероприятиях.
    </p>
    <RouterLink to="/terms-and-conditions">Подробнее</RouterLink>
    <a href="#" v-on:click="setState()">Продолжить</a>
  </dialog>
</template>

<style lang="scss" scoped>
dialog {
  border: none;
  box-shadow: 0 4px 4px rgba(21, 31, 50, 0.031), 0 8px 18px rgba(21, 31, 50, 0.031);
  flex-wrap: wrap;
  font-size: 13px;
  gap: var(--vt-s-gap);
  bottom: 0;
  justify-content: space-between;
  margin: auto;
  max-width: 720px;
  padding: var(--vt-s-gap);
  position: fixed;
  z-index: 9;

  &[open] {
    display: flex;
  }

  a {
    &:first-of-type {
      text-decoration: underline;
    }
  }
}
</style>
