<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
const index = ref(0)
const slides = ref([
  {
    title: 'Юридическое сопровождение деятельности предприятия',
    content:
      'Комплекс мер, направленный на обеспечение максимальной правовой защищенности ведения бизнеса.'
  },
  {
    title: 'Аудиторские услуги',
    content: 'Способствуем повышению доверия к бизнесу.'
  },
  { title: 'Налоговые риски и резервы', content: 'Сделайте Ваш бизнес доходным и безопасным.' }
])

const next = (direction) => {
  const len = slides.value.length
  index.value = (index.value + (direction % len) + len) % len
}

onMounted(() => {
  visible.value = true

  setInterval(() => {
    next(1)
  }, 5000)
})
</script>

<template>
  <section>
    <Transition name="fade" mode="out-in">
      <article v-if="visible" :key="index">
        <h2>{{ slides[index].title }}</h2>
        <p>
          {{ slides[index].content }}
        </p>
      </article>
    </Transition>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: var(--vt-c-theme);
  position: relative;
  z-index: -1;

  article {
    margin: auto;
    max-width: var(--vt-s-width);
    min-height: 600px;
    padding: var(--vt-s-gap);
    display: grid;
    align-content: center;

    h2,
    p {
      max-width: 640px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
