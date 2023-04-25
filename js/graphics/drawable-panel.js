import Panel from './panel.js'
import FileImage from '../shared/file-image.js'

const DrawablePanel = function() {
  Panel.call(this, document.getElementById('drawable-canvas'))
}
Object.setPrototypeOf(DrawablePanel.prototype, Panel.prototype)

DrawablePanel.BACKGROUND_COLOR_GREEN = '#005232'

DrawablePanel.prototype.resize = function() {
  Panel.prototype.resize.call(this)
  this.render()
  FileImage.load()
}

DrawablePanel.prototype.render = function() {
  this.context.fillStyle = DrawablePanel.BACKGROUND_COLOR_GREEN
  this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
}

DrawablePanel.prototype.init = function() {
  Panel.prototype.init.call(this)
  this.render()
}

export default DrawablePanel
