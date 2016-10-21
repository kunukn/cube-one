;
'use strict';

import '../styles/app.scss';

import { log } from './logger';

import { qs, qsa, byId } from './query';

import CubeOne from './cube-one';

import dictColors from './dictionaries/dict-colors';

//log('App running');

const states = {};

function statechangeCallback(eventName, payload) {
    states[payload.cube.id] = payload.currentStateCode;
    checkForComplete();
}

function initCallback(eventName, payload) {}

const bodyWrapperEl = qs('.body-wrapper');

function checkForComplete() {
    let keys = Object.keys(states),
        isComplete = false,
        stateCode;

    if (keys.length >= 4) {
        isComplete = true;
        keys.forEach((key, index, array) => {
            if (index === 0) {
                stateCode = states[key];
            } else if (states[key] !== stateCode) {
                isComplete = false;
            }
        });
    }

    if (isComplete) {
        bodyWrapperEl.classList.add('with-background-image');
        let front = stateCode[1];
        bodyWrapperEl.style.backgroundColor = dictColors[`${front}-dark`];
    } else {
        bodyWrapperEl.classList.remove('with-background-image');
        bodyWrapperEl.style.backgroundColor = '';
    }
}

const cubeOne = {
    cubes: []
};

const cube1 = new CubeOne({
    cubeComponent: byId('cubeone-component-1'),
    infoComponent: qs('.js-state-info-1'),
});
const cube2 = new CubeOne({
    cubeComponent: byId('cubeone-component-2'),
    infoComponent: qs('.js-state-info-2'),
});
const cube3 = new CubeOne({
    cubeComponent: byId('cubeone-component-3'),
    infoComponent: qs('.js-state-info-3'),
});
const cube4 = new CubeOne({
    cubeComponent: byId('cubeone-component-4'),
    infoComponent: qs('.js-state-info-4'),
});


cube1.addCallbackForEvent('init', initCallback);
cube1.addCallbackForEvent('statechange', statechangeCallback);
cube1.init();
cube1.setToRandomState();
cubeOne.cubes.push(cube1);

cube1.addCallbackForEvent('beforerotate', (eventName, payload) => {
    if (payload.action === 'x')
        cube3.x({ skipTriggerEvent: true });
    else if (payload.action === '-x')
        cube3._x({ skipTriggerEvent: true });
    else if (payload.action === 'y')
        cube2.y({ skipTriggerEvent: true });
    else if (payload.action === '-y')
        cube2._y({ skipTriggerEvent: true });
});

//----------

cube2.addCallbackForEvent('init', initCallback);
cube2.addCallbackForEvent('statechange', statechangeCallback);
cube2.init();
cube2.setToRandomState();
cubeOne.cubes.push(cube2);

cube2.addCallbackForEvent('beforerotate', (eventName, payload) => {
    if (payload.action === 'x')
        cube4.x({ skipTriggerEvent: true });
    else if (payload.action === '-x')
        cube4._x({ skipTriggerEvent: true });
    else if (payload.action === 'y')
        cube1.y({ skipTriggerEvent: true });
    else if (payload.action === '-y')
        cube1._y({ skipTriggerEvent: true });
});


//----------

cube3.addCallbackForEvent('init', initCallback);
cube3.addCallbackForEvent('statechange', statechangeCallback);
cube3.init();
cube3.setToRandomState();
cubeOne.cubes.push(cube3);

cube3.addCallbackForEvent('beforerotate', (eventName, payload) => {
    if (payload.action === 'x')
        cube1.x({ skipTriggerEvent: true });
    else if (payload.action === '-x')
        cube1._x({ skipTriggerEvent: true });
    else if (payload.action === 'y')
        cube4.y({ skipTriggerEvent: true });
    else if (payload.action === '-y')
        cube4._y({ skipTriggerEvent: true });
});

//----------

cube4.addCallbackForEvent('init', initCallback);
cube4.addCallbackForEvent('statechange', statechangeCallback);
cube4.init();
cube4.setToRandomState();
cubeOne.cubes.push(cube4);

cube4.addCallbackForEvent('beforerotate', (eventName, payload) => {
    if (payload.action === 'x')
        cube2.x({ skipTriggerEvent: true });
    else if (payload.action === '-x')
        cube2._x({ skipTriggerEvent: true });
    else if (payload.action === 'y')
        cube3.y({ skipTriggerEvent: true });
    else if (payload.action === '-y')
        cube3._y({ skipTriggerEvent: true });
});

//----------

cubeOne.solve = () => {
    cubeOne.cubes.forEach(cube => cube.gotoState('uf'));
};

window.cubeOne = cubeOne;

//----------
log('cubeOne is available in console');


export class App {
    constructor() {}
}