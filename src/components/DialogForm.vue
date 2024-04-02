<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { RouterLink } from 'vue-router'
import { vMaska } from 'maska'

const store = useStore()

const responseData = computed(() => store.getters['smth/data'])

const form = {
  firstname: '',
  company: '',
  email: '',
  phone: '',
  personalData: false,
  subscription: false
}

const errors = ref({})

const prepare = () => {
  if (form.firstname.length < 2) {
    errors.value.firstname = 'Укажите настоящее имя'
  }

  if (form.email.length < 3) {
    errors.value.email = 'Укажите вашу почту'
  }

  if (form.phone.length < 11) {
    errors.value.phone = 'Укажите номер для связи'
  }

  if (!form.personalData) {
    errors.value.personalData = 'Вы должны быть согласны на обработку персональных данных'
  }

  setTimeout(() => {
    errors.value = {}
  }, 2000)

  if (Object.keys(errors.value).length === 0) {
    let form_data = new FormData()
    form_data.append('firstname', form.firstname)
    form_data.append('company', form.company ? form.company : 'Не указал')
    form_data.append('email', form.email)
    form_data.append('phone', form.phone)
    form_data.append('personalData', 'Согласен (-на) на обработку персональных данных.')
    form_data.append('subscription', form.subscription ? 'Согласен на рассылку' : 'Не согласен')

    store.dispatch('smth/sendForm', form_data)
  }
}
</script>

<template>
  <dialog v-if="store.state.dialogForm" open="" v-outside="() => (store.state.dialogForm = false)">
    <form v-on:submit.prevent="prepare()">
      <svg width="24" height="24" v-on:click="store.state.dialogForm = false">
        <use xlink:href="@/assets/images/sprites.svg#close"></use>
      </svg>

      <svg width="80" height="60">
        <use xlink:href="@/assets/images/sprites.svg#icon"></use>
      </svg>

      <h2 v-text="!responseData ? `Консультация со специалистом` : `Отправлено`"></h2>

      <fieldset v-if="!responseData">
        <label for="firstname" :class="{ error: errors.firstname }">
          Ваше имя
          <input type="text" name="firstname" id="firstname" v-model="form.firstname" />
        </label>

        <label for="company">
          Компания (не обязательно)
          <input type="text" name="company" id="company" v-model="form.company" />
        </label>

        <label for="email" :class="{ error: errors.email }">
          Ваша почта
          <input type="email" name="email" id="email" v-model="form.email" />
        </label>

        <label for="phone" :class="{ error: errors.phone }">
          Номер телефона
          <input
            type="tel"
            name="phone"
            id="phone"
            v-model="form.phone"
            v-maska
            data-maska="+7 ### ###-####"
            placeholder="+7 ### ###-####"
          />
        </label>

        <label for="personalData" :class="{ error: errors.personalData }">
          <input
            type="checkbox"
            name="personalData"
            id="personalData"
            v-model="form.personalData"
          />
          <small>
            Согласен (-на) на
            <RouterLink to="/terms-and-conditions">обработку персональных данных</RouterLink
            >.</small
          >
        </label>

        <label for="subscription">
          <input
            type="checkbox"
            name="subscription"
            id="subscription"
            v-model="form.subscription"
          />
          <small>
            Согласен (-на) на получение рекламно-информационных материалов посредством использования
            электронных средств связи.
          </small>
        </label>
      </fieldset>

      <p v-else>{{ responseData }}</p>

      <button type="submit" v-if="!responseData">Отправить</button>
    </form>
  </dialog>
</template>

<style lang="scss" scoped>
form {
  background-color: #ffffff;
  bottom: 0;
  box-shadow: 0 4px 4px #151f3208, 0 8px 18px #151f3208;
  display: grid;
  max-width: 375px;
  padding: var(--vt-s-gap);
  position: fixed;
  right: 20px;
  z-index: 9;

  fieldset {
    display: inherit;
    border: none;
    outline: none;
  }

  svg {
    &:first-of-type {
      cursor: pointer;
      position: absolute;
      right: 10px;

      &:hover {
        opacity: 0.2;
      }
    }
  }

  h2,
  svg {
    margin: 10px auto;
  }

  h2 {
    font-size: 24px;
    text-align: center;
  }
  p {
    text-align: center;
  }

  input[type='checkbox'] {
    display: inline-block;
    margin: 0 4px 0 0;
    width: fit-content;
  }

  label {
    input {
      font-family: inherit;
      margin: 10px 0;
      padding: 8px 16px;
      width: 100%;
    }
  }

  .error {
    color: rgb(194, 37, 37);

    input[type='checkbox'] {
      outline: 1px solid rgb(194, 37, 37);
    }
  }

  button {
    background-color: #e9e9ed;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    margin: 10px 0 0;
    padding: 12px var(--vt-s-gap);

    &:hover {
      background-color: #d4d4d4;
    }
  }
}

/* 
Use a media query to add a breakpoint at 826px:
*/
@media only screen and (max-width: 826px) {
  form {
    overflow: auto;
    height: 100vh;
    right: 0;
  }
}
</style>
