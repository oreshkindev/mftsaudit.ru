<script setup>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
</script>

<template>
  <BreadCrumbs>
    <li>
      <RouterLink to="/">Главная</RouterLink>
    </li>
    <li>Документы</li>
  </BreadCrumbs>

  <main>
    <h1>Документы</h1>

    <section>
      <picture>
        <source srcset="@/assets/images/d60f73a5.f185b7d8.avif" type="image/avif" />
        <source srcset="@/assets/images/d60f73a5.e6a6fd51.webp" type="image/webp" />
        <img
          src="@/assets/images/d60f73a5.0052cda3.jpg"
          alt="Свидетельство о государственной регистрации юридического лица"
        />
      </picture>

      <picture>
        <source srcset="@/assets/images/da5f7360.2e776670.avif" type="image/avif" />
        <source srcset="@/assets/images/da5f7360.3314b6a7.webp" type="image/webp" />
        <img src="@/assets/images/da5f7360.087e5740.jpg" alt="Свидетельство о постановке на учет" />
      </picture>

      <picture>
        <source srcset="@/assets/images/df73a56730.0c41b3ef.avif" type="image/avif" />
        <source srcset="@/assets/images/df73a56730.8e154239.webp" type="image/webp" />
        <img src="@/assets/images/df73a56730.90dea3b7.jpg" alt="Свидетельство о членстве" />
      </picture>

      <picture>
        <source srcset="@/assets/images/df3a5760.29be5e94.avif" type="image/avif" />
        <source srcset="@/assets/images/df3a5760.a78088ce.webp" type="image/webp" />
        <img src="@/assets/images/df3a5760.23a23234.jpg" alt="Квалификационный аттестат аудитора" />
      </picture>

      <picture>
        <source srcset="@/assets/images/df3a57602.3b2095f5.avif" type="image/avif" />
        <source srcset="@/assets/images/df3a57602.edf8510c.webp" type="image/webp" />
        <img src="@/assets/images/df3a57602.57769660.jpg" alt="Страховой полис" />
      </picture>

      <picture>
        <source srcset="@/assets/images/02a3931.avif" type="image/avif" />
        <source srcset="@/assets/images/02a3931.webp" type="image/webp" />
        <img src="@/assets/images/02a3931.jpg" alt="Квалификационный аттестат аудитора" />
      </picture>

      <picture>
        <source srcset="@/assets/images/9c1185a5c5e.avif" type="image/avif" />
        <source srcset="@/assets/images/9c1185a5c5e.webp" type="image/webp" />
        <img src="@/assets/images/9c1185a5c5e.jpg" alt="Квалификационный аттестат аудитора" />
      </picture>

      <picture>
        <source srcset="@/assets/images/032f75b3ca.avif" type="image/avif" />
        <source srcset="@/assets/images/032f75b3ca.webp" type="image/webp" />
        <img src="@/assets/images/032f75b3ca.jpg" alt="Квалификационный аттестат аудитора" />
      </picture>

      <picture>
        <source srcset="@/assets/images/96a81832.avif" type="image/avif" />
        <source srcset="@/assets/images/96a81832.webp" type="image/webp" />
        <img src="@/assets/images/96a81832.jpg" alt="Квалификационный аттестат аудитора" />
      </picture>

      <picture>
        <source srcset="@/assets/images/df3088a5760.a78ce.avif" type="image/avif" />
        <source srcset="@/assets/images/df3088a5760.a78ce.webp" type="image/webp" />
        <img src="@/assets/images/df3088a5760.a78ce.jpg" alt="Квалификационный аттестат аудитора" />
      </picture>

      <picture>
        <source srcset="@/assets/images/df3a57601.c8f5a2f9.avif" type="image/avif" />
        <source srcset="@/assets/images/df3a57601.75f49d42.webp" type="image/webp" />
        <img src="@/assets/images/df3a57601.1f2b666b.jpg" alt="Благодарственное письмо" />
      </picture>

      <picture>
        <source srcset="@/assets/images/imawffg4aw.avif" type="image/avif" />
        <source srcset="@/assets/images/imawffg4aw.webp" type="image/webp" />
        <img src="@/assets/images/imawffg4aw.jpg" alt="Благодарственное письмо" />
      </picture>

      <picture>
        <source srcset="@/assets/images/img4.avif" type="image/avif" />
        <source srcset="@/assets/images/img4.webp" type="image/webp" />
        <img src="@/assets/images/img4.jpg" alt="Страховой полис" />
      </picture>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  h2 {
    margin: 20px 0 40px;
  }

  section {
    display: grid;
    gap: var(--vt-s-gap);
    grid-template: auto / repeat(auto-fit, minmax(272px, auto));

    picture {
      img {
        filter: grayscale(1);
        max-height: 420px;
        object-fit: contain;
        transition: filter 0.3s ease-in-out;
        width: 100%;

        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }
}
</style>
