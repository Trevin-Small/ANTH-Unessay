import { Functions } from './functions.js';
import { Waves } from './waves.js';

window.onload = () => {
    Waves.init(document.body);
    Functions.rescaleIcons();
    Functions.rescaleFont();
    let colorSchemeNum = Math.floor(Math.random() * (Functions.colorSchemes.length - 1)) + 1;
    Functions.setColorScheme(colorSchemeNum);

    window.onresize = function() {
        Waves.stopRender();
        Waves.resize();
        Functions.rescaleIcons();
        Functions.rescaleFont();
        Waves.newWaves();
        Waves.startRender();
    };
}