import Panel from './panel.js'

const AnimationPanel = function() {
  Panel.call(this, document.getElementById('animation-canvas'))
}
Object.setPrototypeOf(AnimationPanel.prototype, Panel.prototype)

AnimationPanel.prototype.clear = function() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
}

export default AnimationPanel
