import { config, initGui } from "./Config"
import { CanvasExt } from "./CanvasExt"

class App {
    canvas: HTMLCanvasElement;

    run() {
        this.init();
        this.update();
    }

    init() {
        this.initCanvas();
    }

    initCanvas() {
        this.canvas = document.createElement("canvas");
        this.canvas.id = "canv";
        this.canvas.width = config.playgroundWidth;
        this.canvas.height = config.playgroundHeight;
        this.canvas.style.width = config.playgroundWidth + "px";
        this.canvas.style.height = config.playgroundHeight + "px";
        document.body.append(this.canvas);
    }

    update() {

    }
}

function main() {
    var application = new App();
    application.run();
}

window.onload = main;