;
'use strict';

import '../styles/app.scss';

import { log } from './logger';

import { qs, qsa, byId } from './query';

import CubeOne from './cube-one';

//log('App running');

const cube1 = new CubeOne({
    cubeComponent: byId('cubeone-component-1'),
    infoComponent: qs('.js-state-info-1'),
});
cube1.init();

const cube2 = new CubeOne({
    cubeComponent: byId('cubeone-component-2'),
    infoComponent: qs('.js-state-info-2'),
});
cube2.init();

const cube3 = new CubeOne({
    cubeComponent: byId('cubeone-component-3'),
    infoComponent: qs('.js-state-info-3'),
});
cube3.init();

const cube4 = new CubeOne({
    cubeComponent: byId('cubeone-component-4'),
    infoComponent: qs('.js-state-info-4'),
});
cube4.init();

window.cubeOne = window.cubeOne || [];
window.cubeOne.push(cube1);
window.cubeOne.push(cube2);
window.cubeOne.push(cube3);
window.cubeOne.push(cube4);

log('cubeOne is available in console');


export class App {
    constructor() {}
}