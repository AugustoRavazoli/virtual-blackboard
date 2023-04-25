import Tool from './tool.js'
import Graphics from '../graphics/graphics.js'

const Chalk = function() {
  Tool.call(this, 0, 0, 40, 8, Graphics.animationPanel)
  this.currentColor = 'white'
  this.colors = {
    white: '#EBEBE9',
    green: '#77B14D',
    red: '#DD4D6B',
    orange: '#D3762C',
    yellow: '#D8CB49',
    blue: '#76C8DC'
  }
}
Object.setPrototypeOf(Chalk.prototype, Tool.prototype)

Chalk.prototype.init = function(cursor) {
  Tool.prototype.init.call(this)
  document.addEventListener('mousedown', e => this.getPosition(e))
  document.addEventListener('touchstart', e => this.getPosition(e))
  for (const key in this.colors) {
    document.getElementById(key).onclick = () => {
      this.currentColor = key
      cursor.currentTool = 'chalk'
    }
  }
}

Chalk.prototype.act = function(event) {
  Graphics.drawablePanel.context.beginPath()
  Graphics.drawablePanel.context.lineWidth = 3
  Graphics.drawablePanel.context.strokeStyle = this.colors[this.currentColor]
  Graphics.drawablePanel.context.moveTo(this.x, this.y)
  this.getPosition(event)
  Graphics.drawablePanel.context.lineTo(this.x, this.y)
  Graphics.drawablePanel.context.stroke()
}

Chalk.prototype.render = function() {
  Graphics.animationPanel.context.save()
  Graphics.animationPanel.context.translate(this.x - 4 + this.width / 2, this.y - 16 + this.height / 2)
  Graphics.animationPanel.context.rotate(2.35)
  Graphics.animationPanel.context.fillStyle = this.colors[this.currentColor]
  Graphics.animationPanel.context.fillRect(this.width / -2, this.height / -2, this.width, this.height)
  Graphics.animationPanel.context.restore()
}

export default Chalk
