<template>
  <div class="container">
    <header>
      <h1 class="title">
        Simple password generator
      </h1>
      <h2 class="subtitle">
        Generate your password on the fly using the website address, your login and secret phrase!
      </h2>
    </header>
    <section class="content">
      <div class="field">
        <h3 class="field__title">
          <span class="gray-600">1.</span> Enter web-site address
        </h3>
        <div class="field__input">
          <input>
        </div>
      </div>
      <div class="field">
        <h3 class="field__title">
          <span class="gray-600">2.</span> Enter your login
        </h3>
        <div class="field__input">
          <input>
        </div>
      </div>
      <div class="field">
        <h3 class="field__title">
          <span class="gray-600">3.</span> Enter your secret phrase
        </h3>
        <div class="field__input">
          <input>
          <div class="space" />
          <button>
            <i class="mdi mdi-24px mdi-eye" />
          </button>
        </div>
      </div>
      <div class="field">
        <h3 class="field__title text-center">
          Your generated password
        </h3>
      </div>
      <div class="field__input">
        <input>
      </div>
      <div class="field">
        <div class="field__input flex-container row-flex-end">
          <button>Show password</button>
          <div class="space" />
          <button>Copy to clipboard</button>
        </div>
      </div>
    </section>
    <footer>
      <div class="links flex-container row-flex-end">
        <a
          :href="homepage"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="@/assets/github-logo.png"
            height="28"
            alt="Github Repository"
          >
        </a>
      </div>
    </footer>
    <!-- <Toast ref="bottomToast" /> -->
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/_sizes";

.container {
  padding: $size-18;

  & > :not(:last-child) {
    margin: 0 0 $size-20;
  }
}

header {
  margin: 0 0 $size-20;

  .title {
    font-family: "Roboto Slab";
    font-weight: 700;
    font-size: 2.3em;
  }

  .subtitle {
    font-family: "Lato";
    font-weight: 400;
    font-size: 1.3em;
  }
}

.content {
  padding: $size-20 $size-25;
  background-color: white;
}

.flex-container {
  display: flex;
}

.field {
  &:not(:last-child) {
    margin: 0 0 $size-20 0;
  }

  &__title {
    font-size: 1.15em;
    font-family: "Lato";
    font-weight: 400;
  }

  &__input {
    display: flex;
    margin: $size-15 $size-10 $size-5;

    input {
      flex: 1;
      padding: $size-8 $size-10;
    }
  }
}

.row-flex-end {
  flex-direction: row;
  justify-content: flex-end;
}

footer {
  // margin: 0 $size-15 $size-5;
}

.space {
  width: $size-15;
}

// extra small
@media screen {
}

// small
@media screen and (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

// medium
@media screen and (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

// large
@media screen and (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

// extra large
@media screen and (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
</style>
<style lang="scss" scoped>
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Toast from '@/components/Toast.vue';

@Component({
  components: {
    Toast
  }
})
export default class PasswordGeneratorLayout extends Vue {
  public mounted () {
    this.showToast();
  }

  public showToast () {
    (this.$refs[ 'bottomToast' ] as Toast).show('text');
  }

  public get homepage() {
    return process.env.VUE_APP_GIT_HOMEPAGE;
  }
}
</script>
