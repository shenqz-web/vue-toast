<template>
  <div id="app">
    <div class="button-content">
      <button @click="notice">消息通知 Notice</button>
      <button @click="notice2">消息通知 渐隐效果 Notice</button>
      <button @click="toast">点击弹出 Toast</button>
      <button @click="toast2">自定义 Toast位置</button>
      <button @click="toast3">点击弹出带有 icon 的 Toast</button>
      <button @click="indicator">点击弹出加载动画 Indicator</button>
      <button @click="alertFn">点击弹出alert提示框</button>
      <button @click="confirmFn">点击弹出confirm提示框</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
  },
  methods: {
    notice () {
      this.$notice({
        message: '这是默认消息通知内容'
      })
    },
    notice2 () {
      this.$notice({
        message: '这是渐隐效果消息通知内容',
        closeText: 'close',
        animation: 'fade',
        duration: 2000
      })
    },
    toast () {
      this.$toast({
        message: '我是默认Toast'
      })
    },
    toast2 () {
      this.$toast({
        message: '我是自定义Toast',
        duration: 2000,
        position: 'bottom'
      })
    },
    toast3 () {
      this.$toast({
        message: '操作成功',
        duration: 2000,
        isIcon: true
      })
    },
    indicator () {
      this.$indicator.open()
      setTimeout(() => {
        this.$indicator.close()
      }, 3000)
    },
    alertFn () {
      this.$dialog.alert({
        message: '操作成功'
      })
    },
    confirmFn () {
      this.$dialog.confirm({
        message: '操作成功'
      })
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.button-content {
  padding: 0 20px;
  top: 50%;
  width: 100%;
  position: absolute;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  box-sizing: border-box;
}
button {
  display: block;
  width: 100%;
  margin: 20px 0 0;
  color: #656b79;
  background-color: #f6f8fa;
  box-shadow: 0 0 1px #b8bbbf;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  font-size: 18px;
  height: 41px;
  outline: 0;
  overflow: hidden;
  position: relative;
}
</style>
