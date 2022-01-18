export default {
  bind(el, binding, vnode) {
    el.style.color = 'red'
  },
  inserted(el, binding, vnode) {
    console.log('inserted')
  },
  update(el, binding, vnode, oldVnode) {
    console.log("update")
  },
  componentUpdated(el, binding, vnode, oldVnode) {
    console.log('componentUpdated')
  },
  unbind() {
    console.log("unbind")
  }
}
