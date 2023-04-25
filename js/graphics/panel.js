const Panel = function(canvas) {
  this.canvas = canvas
  this.context = canvas.getContext('2d', { willReadFrequently: true })
}

Panel.prototype.resize = function() {
  this.canvas.width = innerWidth
  this.canvas.height = innerHeight
}

Panel.prototype.init = function() {
  window.addEventListener('resize', e => this.resize())
  this.resize()
  this.canvas.ondragstart = () => false
}

export default Panel
