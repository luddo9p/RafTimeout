/* eslint-disable */
export default class RafTimeout {
  constructor (opt = {
    callback,
    delay
  }) {
    this.callback = opt.callback || undefined
    this.delay = opt.delay || undefined
    this.loop = null
    this.timeout()
  }

  timeout () {
    let start = performance.now()

    this.loop = function () {
      let current = performance.now()
      let delta = current - start

      if (delta >= this.delay) {
        this.callback()
        cancelAnimationFrame(this.loop)
        this.loop = undefined
      } else {
        if (this.loop) { requestAnimationFrame(this.loop.bind(this)) }
      }
    }

    if (this.loop) { requestAnimationFrame(this.loop.bind(this)) }
  }
}
