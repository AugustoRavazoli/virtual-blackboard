import Tool from './tool.js'
import Graphics from '../graphics/graphics.js'

const Eraser = function() {
  Tool.call(this, 0, 0, 80, 25, Graphics.animationPanel)
  this.element = document.getElementById('eraser')
}
Object.setPrototypeOf(Eraser.prototype, Tool.prototype)

Eraser.BACKGROUND_GREEN_COLOR =' #005232'
Eraser.TOP_BROWN_COLOR = '#FEBB64'
Eraser.BOTTOM_GREY_COLOR = '#321B0D'

Eraser.prototype.init = function(cursor) {
  Tool.prototype.init.call(this)
  this.element.onclick = () => cursor.currentTool = 'eraser'
}

Eraser.prototype.act = function(event) {
  Graphics.drawablePanel.context.save()
  this.getPosition(event)
  Graphics.drawablePanel.context.translate(this.x + this.width / 2, this.y + this.height / 2)
  Graphics.drawablePanel.context.fillStyle = Eraser.BACKGROUND_GREEN_COLOR
  Graphics.drawablePanel.context.rotate(3.92)
  Graphics.drawablePanel.context.fillRect(this.width / -2, this.height / -2, this.width, this.height)
  Graphics.drawablePanel.context.restore()
}

Eraser.prototype.render = function() {
  Graphics.animationPanel.context.save()
  Graphics.animationPanel.context.translate(this.x + this.width / 2, this.y + this.height / 2)
  Graphics.animationPanel.context.rotate(3.92)
  Graphics.animationPanel.context.fillStyle = Eraser.TOP_BROWN_COLOR
  Graphics.animationPanel.context.fillRect(this.width / -2, this.height / -2, this.width, this.height)
  Graphics.animationPanel.context.fillStyle = Eraser.BOTTOM_GREY_COLOR
  Graphics.animationPanel.context.fillRect(this.width / -2, this.height / -2, this.width, 5)
  Graphics.animationPanel.context.restore()
}

export default Eraser
