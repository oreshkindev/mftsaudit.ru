<script setup>
import TheHeader from '@/components/TheHeader.vue'
import DialogTerms from '@/components/DialogTerms.vue'
import DialogForm from '../src/components/DialogForm.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <TheHeader></TheHeader>

  <RouterView />

  <DialogTerms></DialogTerms>

  <DialogForm></DialogForm>

  <TheFooter></TheFooter>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&&display=swap');

:root {
  --vt-c-white: #ffffff;

  --vt-c-theme: #fcfcfc;

  --vt-c-dark: #393b44;

  --vt-s-gap: 40px;
  --vt-s-width: 1560px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  color: var(--vt-c-dark);
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  min-height: 100vh;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: inherit;
  font-weight: 400;
}

b {
  font-weight: 500;
}

h1 {
  font-size: 32px;
  margin: 0 0 var(--vt-s-gap);
}

h2 {
  font-size: 32px;
  margin: 0 0 20px;
}

svg {
  fill: var(--vt-c-dark);
}

a {
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

ul > li {
  list-style: none;
}

main {
  margin: auto;
  max-width: var(--vt-s-width);
  padding: var(--vt-s-gap);
}

/* 
  Ordered list
*/
ol {
  counter-reset: item;

  li {
    display: block;
    font-weight: 500;
  }

  li::before {
    content: counters(item, '.') '. ';
    counter-increment: item;
  }

  ol {
    padding: 0 0 0 var(--vt-s-gap);

    li {
      font-weight: 400;
    }

    ul {
      padding: 0 0 0 var(--vt-s-gap);

      li::before {
        content: none;
      }
    }
  }
}

/* 
  Scrollable table
*/
table {
  border-collapse: collapse;
  display: block;
  font-family: inherit;
  margin: 20px 0;
  overflow: auto;
  text-align: left;

  th {
    font-weight: 500;
  }

  th,
  td {
    border: 1px solid;
    padding: 0 20px;
  }
}

/* 
Use a media query to add a breakpoint at 826px:
*/
@media only screen and (max-width: 826px) {
  :root {
    --vt-s-gap: 20px;
  }

  h1 {
    font-size: 24px;
  }
}
</style>
