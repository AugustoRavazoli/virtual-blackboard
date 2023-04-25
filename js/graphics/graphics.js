import DrawablePanel from './drawable-panel.js'
import AnimationPanel from './animation-panel.js'

const Graphics = {
  drawablePanel: new DrawablePanel(),
  animationPanel: new AnimationPanel(),
  init: function() {
    this.drawablePanel.init()
    this.animationPanel.init()
  },
  clear: function() {
    this.animationPanel.clear()
  }
}

export default Graphics