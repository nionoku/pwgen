<template>
  <PasswordGeneratorLayout />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PasswordGeneratorLayout from '@/views/PasswordGeneratorLayout.vue';

@Component({
  components: {
    PasswordGeneratorLayout
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
