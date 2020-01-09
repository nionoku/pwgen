<template>
  <Toast ref="bottomToast" />
</template>

<style lang="scss">
html, body, #app {
  height: 100%;
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
  mounted() {
    this.showToast();
  }
  public showToast() {
    (this.$refs['bottomToast'] as Toast).show('text');
  }
}
</script>
