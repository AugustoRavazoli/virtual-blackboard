const Tool = function(x, y, width, height, panel) {
  this.x = x
  this.y = y
  this.width = width
  this.height = height
  this.panel = panel
}

Tool.prototype.getPosition = function(event) {
  this.x = (event.clientX || event.targetTouches[0].clientX) - this.panel.canvas.offsetLeft
  this.y = (event.clientY || event.targetTouches[0].clientY) - this.panel.canvas.offsetTop
}

Tool.prototype.init = function() {
  document.addEventListener('touchmove', e => this.getPosition(e))
  document.addEventListener('mousemove', e => this.getPosition(e))
}

export default Tool
