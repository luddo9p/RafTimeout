export default function delay (_time) {
  return new Promise((resolve, reject) => {
    if (_time === undefined || _time === null) {
      reject(new Error('Argument _time is missing'))
    }

    if (typeof _time !== 'number') {
      reject(new TypeError('Argument _time must be a Number'))
    }

    const time = parseInt(_time, 10)
    const start = performance.now()
    let id = null

    function loop () {
      if (performance.now() - start >= time && id) {
        cancelAnimationFrame(id)
        id = null
        return resolve()
      }

      id = requestAnimationFrame(loop)
    }
    id = requestAnimationFrame(loop)
  })
}
