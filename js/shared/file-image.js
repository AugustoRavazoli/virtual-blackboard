import Graphics from '../graphics/graphics.js'

const FileImage = {
  data: null,
  save: function() {
    this.data = Graphics.drawablePanel.context.getImageData(
      0, 0, Graphics.drawablePanel.canvas.width, Graphics.drawablePanel.canvas.height
    )
  },
  load: function() {
    this.data && Graphics.drawablePanel.context.putImageData(this.data, 0, 0)
  }
}

export default FileImage
