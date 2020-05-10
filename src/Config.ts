import * as dat from "dat.gui"

export var config = {
    playgroundWidth: 500,
    playgroundHeight: 500
};

export function initGui() {
    var gui = new dat.GUI();
    gui.add(config, "resolution");
}