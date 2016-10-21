;
'use strict';

import '../styles/app.scss';

import { log } from './logger';

import { qs, qsa, byId } from './query';

import CubeOne from './cube-one';

//log('App running');

const states = {};

function statechangeCallback(eventName, payload) {
    states[payload.cube.id] = payload.currentStateCode;
    checkForComplete();
}

function initCallback(eventName, payload) {}

const bodyWrapperEl = qs('.body-wrapper');

function checkForComplete() {


    let keys = Object.keys(states);
    let isComplete = false;

    if (keys.length >= 4) {
        isComplete = true;
        keys.forEach((key, index, array) => {
            if (states[key] !== 'uf') {
                isComplete = false;
            }
        });
    }

    if (isComplete)
        bodyWrapperEl.classList.add('with-background-image');
    else {
        bodyWrapperEl.classList.remove('with-background-image');
    }
}

let cubeOne = {
    cubes: []
};

let cube = new CubeOne({
    cubeComponent: byId('cubeone-component-1'),
    infoComponent: qs('.js-state-info-1'),
});
cube.addCallbackForEvent('init', initCallback);
cube.addCallbackForEvent('statechange', statechangeCallback);
cube.init();
cube.setToRandomState();
cubeOne.cubes.push(cube);

//----------
cube = new CubeOne({
    cubeComponent: byId('cubeone-component-2'),
    infoComponent: qs('.js-state-info-2'),
});
cube.addCallbackForEvent('init', initCallback);
cube.addCallbackForEvent('statechange', statechangeCallback);
cube.init();
cube.setToRandomState();
cubeOne.cubes.push(cube);

//----------
cube = new CubeOne({
    cubeComponent: byId('cubeone-component-3'),
    infoComponent: qs('.js-state-info-3'),
});
cube.addCallbackForEvent('init', initCallback);
cube.addCallbackForEvent('statechange', statechangeCallback);
cube.init();
cube.setToRandomState();
cubeOne.cubes.push(cube);

//----------
cube = new CubeOne({
    cubeComponent: byId('cubeone-component-4'),
    infoComponent: qs('.js-state-info-4'),
});
cube.addCallbackForEvent('init', initCallback);
cube.addCallbackForEvent('statechange', statechangeCallback);
cube.init();
cube.setToRandomState();
cubeOne.cubes.push(cube);

//----------

cubeOne.solve = () => {
    cubeOne.cubes.forEach( cube => cube.gotoState('uf'));
};

window.cubeOne = cubeOne;



//----------
log('cubeOne is available in console');


export class App {
    constructor() {}
}