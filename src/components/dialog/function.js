import Vue from 'vue'
import Component from './Dialog'

const DialogComponent = Vue.extend(Component)

let instance

const dialog = (options) => {
  if (Vue.prototype.$isServer) return

  const {message} = options

  instance = new DialogComponent({
    propsData: {
      message
    },
    data: {
    }
  })

  instance = instance.$mount()
  document.body.appendChild(instance.$el)
  instance.visible = true

  instance.$on('closed', () => {
    console.log(1)
    document.body.removeChild(instance.$el)
    instance.$destroy()
  })

  instance.$on('cancel', () => {
    instance.visible = false
  })
}

export default dialog
