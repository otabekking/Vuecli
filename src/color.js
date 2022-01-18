export default {
  bind(el, binding, vnode) {
    // el.style.color = 'red'

    const fontModifier = binding.modifiers['font']
    if (fontModifier) {
      el.style.fontSize = "30px"
    }
    const delayModifier = binding.modifiers['delay']
    let delay = 5000

    if (delayModifier) {
      delay = 1000
    }
    setTimeout(() => {
      const arg = binding.arg
      el.style[arg] = binding.value

    }, delay)

  }
}
