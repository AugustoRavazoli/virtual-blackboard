import FileImage from '../shared/file-image.js'
import Chalk from './chalk.js'
import Eraser from './eraser.js'

const Cursor = {
  pressed: false,
  currentTool: 'chalk',
  tools: {
    chalk: new Chalk(),
    eraser: new Eraser()
  },
  act: function(e) {
    if (!this.pressed) return
    this.tools[this.currentTool].act(e)
    FileImage.save()
  },
  init: function() {
    document.addEventListener('touchstart', () => (this.pressed = true))
    document.addEventListener('touchmove', e => this.act(e))
    document.addEventListener('touchend', () => (this.pressed = false))
    document.addEventListener('mousedown', () => (this.pressed = true))
    document.addEventListener('mousemove', e => this.act(e))
    document.addEventListener('mouseup', () => (this.pressed = false))
    for (const key in this.tools) this.tools[key].init(this)
  },
  render: function() {
    this.tools[this.currentTool].render()
  }
}

export default Cursor
