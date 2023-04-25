import Graphics from './graphics/graphics.js'
import Cursor from './cursor/cursor.js'

function start() {
  Graphics.init()
  Cursor.init()
  update()
}

function update() {
  Graphics.clear()
  Cursor.render()
  requestAnimationFrame(update)
}

window.addEventListener('touchstart', () => document.body.requestFullscreen())
window.addEventListener('load', () => start())
