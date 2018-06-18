<template>
  <div class="dialog-wrapper">
    <transition name="scale" @after-leave="afterLeave">
      <div class="dialog-box" v-show="visible">
        <div class="dialog-header">
          <div class="dialog-title">{{ title }}</div>
        </div>
        <div class="dialog-content">
          <div class="dialog-message">{{ message }}</div>
        </div>
        <div class="dialog-btns">
          <button class="btn cancel" @click="cancelAction">{{ cancelButtonText }}</button>
          <button class="btn confirm" @click="confirmAction">{{ confirmButtonText }}</button>
        </div>
      </div>
    </transition>
    <div class="dialog-mask" v-show="visible"></div>
  </div>
</template>

<script>
export default {
  name: 'dialogComponent',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    message: {
      type: String,
      required: true
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    confirmButtonText: {
      type: String,
      default: '确定'
    }
  },
  data () {
    return {
      visible: true
    }
  },
  methods: {
    afterLeave () {
      this.$emit('closed')
    },
    cancelAction (e) {
      e.preventDefault()
      this.$emit('cancel')
    },
    confirmAction () {}
  }
}
</script>

<style scoped>
  .scale-enter-active, .scale-leave-active {
    transition: all 5s
  }
  .scale-enter, .scale-leave-to {
    opacity: 0;
    transform: translate3d(-50%,-50%,0) scale(0.2);
  }
  .dialog-wrapper {
    position: absolute;
    z-index: 2059;
    box-sizing: border-box;
  }
  .dialog-box {
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0);
    background-color: #fff;
    width: 75%;
    border-radius: 3px;
    font-size: 16px;
    -webkit-user-select: none;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: .2s;
    transition: .2s;
    box-sizing: border-box;
    z-index: 1;
  }
  .dialog-mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
    background: #000;
  }
  .dialog-header {
    padding: 15px 0 0;
  }
  .dialog-content {
    padding: 10px 20px 15px;
    border-bottom: 1px solid #ddd;
    min-height: 36px;
    position: relative;
  }
  .dialog-title {
    text-align: center;
    padding-left: 0;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
  .dialog-message {
    color: #999;
    margin: 0;
    text-align: center;
    line-height: 36px;
  }
  .dialog-btns {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 40px;
    line-height: 40px;
  }
  .dialog-btns .btn {
    line-height: 35px;
    display: block;
    background-color: #fff;
    flex: 1;
    margin: 0;
    font-size: 16px;
    border: 0;
  }
  .dialog-btns .btn:focus {
    outline: none;
  }
  .dialog-btns .btn:active {
    background-color: #fff;
  }

  .dialog-btns .cancel {
    width: 50%;
    border-right: 1px solid #ddd;
  }
  .dialog-btns .cancel:active {
    color: #000;
  }
  .dialog-btns .confirm {
    color: #26a2ff;
    width: 50%;
  }
  .dialog-btns .confirm:active {
    color: #26a2ff;
  }
</style>
