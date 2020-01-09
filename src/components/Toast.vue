<template>
  <div
    ref="toast"
    class="toast"
    :class="{ show: isShow }"
  />
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_colors";

$bottom-offset: 5vh;

.toast {
  // visibility: hidden;
  background-color: $gray-900-transparent;
  color: white;
  text-align: center;
  border-radius: 50px;
  padding: 10px 14px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: $bottom-offset;
  font-size: 1em;
}

.toast.show {
  // visibility: visible;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: $bottom-offset;
    opacity: 1;
  }
}

@keyframes fadeout {
  from {
    bottom: $bottom-offset;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

// extra small
@media screen {
  $toast-min-width: 80px;
  $margin: 14px;

  .toast {
    min-width: $toast-min-width;
    margin-left: -$toast-min-width / 2 - $margin;
  }
}

// small and other
@media screen and (min-width: 576px) {
  $toast-min-width: 90px;
  $margin: 14px;

  .toast {
    min-width: $toast-min-width;
    margin-left: -$toast-min-width / 2 - $margin;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Toast extends Vue {
  private _isShow: boolean = false;

  public show (text: string) {
    const toast = (this.$refs['toast'] as HTMLDivElement);
    toast.innerHTML = text;

    this._isShow = true;

    setTimeout(() => {
      this.hide();
    }, 2800);
  }

  public hide () {
    this._isShow = false;

    const toast = (this.$refs['toast'] as HTMLDivElement);
    toast.innerHTML = '';
  }

  public get isShow(): boolean {
    return this._isShow;
  }
}
</script>
