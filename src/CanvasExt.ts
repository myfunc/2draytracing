import { config } from "../Config"

export class CanvasExt {
    context: CanvasRenderingContext2D;
    constructor(context: CanvasRenderingContext2D) {
        this.context = context;
    }

    updateFast(fn) {
        var resolution = Math.floor(GuiControls.resolution);
        var data = context.getImageData(0, 0, resolution, resolution);
        for (let i = 0; i < resolution; i++) {
            for (let j = 0; j < resolution; j++) {
                var col = fn(i, j);
                //if (col == 0) continue;
                var sinCol = 60 + Math.sin((GuiControls.imaginInc)*0.01)* 128;
                var index = (j * resolution + i) * 4;
                data.data[index] = sinCol ? sinCol - j + i/4 : 0;
                data.data[index + 1] = col > 64 ? col - 40 : 0
                data.data[index + 2] = col - sinCol ? col - j - sinCol - i/j : 0;
                data.data[index + 3] = 255;
            }
        }
        this.context.putImageData(data, 0, 0);
    }
}