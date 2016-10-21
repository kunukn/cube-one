;
'use strict';

import '../styles/app.scss';

import { log } from './logger';

import { qs, qsa, byId } from './query';

import CubeOne from './cube-one';

//log('App running');

window.cubeOne = window.cubeOne || [];

let cube = new CubeOne({
    cubeComponent: byId('cubeone-component-1'),
    infoComponent: qs('.js-state-info-1'),
});
//cube.addCallbackForEvent('init', (eventName, payload) => {log(eventName), log(payload)});
cube.init();
cube.setToRandomState();
cube.addCallbackForEvent('statechange', (eventName, payload) => {log(eventName), log(payload)});
window.cubeOne.push(cube);

//----------
cube = new CubeOne({
    cubeComponent: byId('cubeone-component-2'),
    infoComponent: qs('.js-state-info-2'),
});
cube.init();
cube.setToRandomState();
cube.addCallbackForEvent('statechange', (eventName, payload) => {log(eventName), log(payload)});
window.cubeOne.push(cube);

//----------
cube = new CubeOne({
    cubeComponent: byId('cubeone-component-3'),
    infoComponent: qs('.js-state-info-3'),
});
cube.init();
cube.setToRandomState();
cube.addCallbackForEvent('statechange', (eventName, payload) => {log(eventName), log(payload)});
window.cubeOne.push(cube);

//----------
cube = new CubeOne({
    cubeComponent: byId('cubeone-component-4'),
    infoComponent: qs('.js-state-info-4'),
});
cube.init();
cube.setToRandomState();
cube.addCallbackForEvent('statechange', (eventName, payload) => {log(eventName), log(payload)});
window.cubeOne.push(cube);

//----------
log('cubeOne is available in console');


export class App {
    constructor() {}
}