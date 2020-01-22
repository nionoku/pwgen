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
          <span class="gray-600">1.</span> Enter website address
        </h3>
        <div class="field__input">
          <input
            id="website"
            v-model="website"
            name="website"
            aria-label="website"
            list="websites"
            type="text"
            autocomplete="on"
            placeholder="Enter website address here"
            @keyup="onEventGeneratePassword"
          >
          <datalist id="websites">
            <option
              v-for="(site, index) in sites"
              :key="index"
              :value="site"
            />
          </datalist>
        </div>
      </div>
      <div class="field">
        <h3 class="field__title">
          <span class="gray-600">2.</span> Enter your login
        </h3>
        <div class="field__input">
          <input
            id="username"
            v-model="login"
            name="username"
            aria-label="username"
            type="text"
            autocomplete="on"
            placeholder="Enter your login here"
            @keyup="onEventGeneratePassword"
          >
        </div>
      </div>
      <div class="field">
        <h3 class="field__title">
          <span class="gray-600">3.</span> Enter your secret phrase
        </h3>
        <div class="field__input">
          <input
            id="secret"
            v-model="secret"
            name="secret"
            aria-label="secret"
            :type="secretIsHidden ? 'password' : 'text'"
            autocomplete="new-password"
            placeholder="Enter your secret phrase here"
            @keyup="onEventGeneratePassword"
          >
          <div class="space" />
          <button
            class="px-7 py-5"
            @click="secretIsHidden = !secretIsHidden"
          >
            <i
              class="mdi mdi-24px"
              :class="{ 'mdi-eye': secretIsHidden, 'mdi-eye-off': !secretIsHidden }"
            />
          </button>
        </div>
      </div>
      <div class="field">
        <h3 class="field__title text-center large-title">
          Your generated password
        </h3>
      </div>
      <div class="field__input">
        <input
          id="generated"
          v-model="generated"
          class="generated"
          name="generated"
          :type="generatedIsHidden ? 'password' : 'text'"
          readonly
        >
      </div>
      <div class="field">
        <div class="field__input flex-container row-flex-end">
          <button
            class="px-7 py-5"
            @click="generatedIsHidden = !generatedIsHidden"
          >
            {{ `${generatedIsHidden ? 'Show' : 'Hide'} password` }}
          </button>
          <div class="space" />
          <button
            v-clipboard="() => generated"
            v-clipboard:success="onSuccessCopied"
            v-clipboard:error="onErrorCopied"
            class="px-7 py-5"
          >
            Copy to clipboard
          </button>
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

    <Toast ref="bottomToast" />
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/_colors";
@import "@/assets/scss/_sizes";

.container {
  padding: $size-18;

  & > :not(:last-child) {
    margin: 0 0 $size-20;
  }
}

input:-webkit-autofill {
  background: red;
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
  padding: $size-20 $size-15;
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
    font-family: "Roboto";
    font-weight: 300;
    letter-spacing: $size-1;
  }

  &__title.large-title {
    font-size: 1.5em;
  }

  &__input {
    display: flex;
    margin: $size-15 $size-10 $size-5;

    input {
      font-size: 1.125em;
      flex: 1;
      padding: $size-12 $size-10;
      border: $size-1 solid $gray-500;
      border-radius: $size-3;
      text-transform: lowercase;
      color: $gray-800;

      &::placeholder {
        font-size: 0.8em;
        text-transform: uppercase;
        letter-spacing: $size-1;
      }
    }

    input.generated {
      border: none;
      text-align: center;
      text-transform: none;

      &:focus {
        border: none;
        outline: none;
      }
    }
  }
}

.row-flex-end {
  flex-direction: row;
  justify-content: flex-end;
}

.space {
  width: $size-15;
}

.px-7 {
  padding-left: $size-7;
  padding-right: $size-7;
}

.py-5 {
  padding-top: $size-5;
  padding-bottom: $size-5;
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

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Toast from '@/components/Toast.vue';
import Container from 'typedi';
import { PasswordGenerator } from '../managers/PasswordGenerator';
import { ConstantManager } from '@/utils/ConstantManager';

@Component({
  components: {
    Toast
  }
})
export default class PasswordGeneratorLayout extends Vue {
  public generator: PasswordGenerator = Container.get(PasswordGenerator)

  public website = '';
  public login = '';
  public secret = '';
  public generated = '';

  public secretIsHidden = true;
  public generatedIsHidden = true;

  private savedSites: Array<string> = [];

  public mounted () {
    const loadedSites: string = localStorage.getItem(ConstantManager.SAVED_SITES) || '[]';
    this.savedSites.push(...JSON.parse(loadedSites));

    window.onbeforeunload = () => {
      localStorage.setItem(ConstantManager.SAVED_SITES, JSON.stringify(this.savedSites));
    };
  }

  public showToast () {
    (this.$refs[ 'bottomToast' ] as Toast).show('Copied!');
  }

  public get homepage () {
    return process.env.VUE_APP_GIT_HOMEPAGE;
  }

  public get passwordLength (): number {
    return Number(process.env.VUE_APP_PASSWORD_LENGTH);
  }

  public get sites (): Array<string> {
    return this.savedSites;
  }

  public saveSite(site: string) {
    if (!this.sites.includes(site))
      this.sites.unshift(site);
  }

  public onSuccessCopied () {
    this.saveSite(this.website);
    this.showToast();
  }

  public onErrorCopied () {
    // TODO show error alert
    alert('error');
  }

  public onEventGeneratePassword () {
    this.generated = this.generatePassword([ this.website, this.login, this.secret ], this.passwordLength);
  }

  private generatePassword (fields: Array<string>, passwordLength: number): string {
    // проверяем, что все строки из входного массива валидны
    if (fields.filter(it => it && it != '').length === fields.length) {
      return this.generator.generate(fields, passwordLength);
    } else {
      return '';
    }
  }

  @Watch('generatedIsHidden')
  public onGeneratedIsHiddenHasChanged () {
    this.saveSite(this.website);
  }
}
</script>
