'use strict';

import '../styles/app.scss';

import { log } from './logger';

import { qs, qsa, byId } from './query';

import CubeOne from './cube-one';

import dictColors from './dictionaries/dict-colors';

//log('App running');

const states = {};
const infos = {
    'cubeone-component-1': qs('.js-state-info-1'),
    'cubeone-component-2': qs('.js-state-info-2'),
    'cubeone-component-3': qs('.js-state-info-3'),
    'cubeone-component-4': qs('.js-state-info-4'),
}

function statechangeCallback(eventName, payload) {
    states[payload.cube.id] = payload.currentStateCode;
    checkForComplete();

    let info = infos[payload.cube.id];
    if (info)
        info.innerHTML = `<label>State: </label><span class="state"> ${payload.currentStateCode}</span>`;
}

function initCallback(eventName, payload) {}

const bodyWrapperEl = qs('.body-wrapper');
const cubeOneSceneEl = qs('.cubeone-scene');


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
});
const cube2 = new CubeOne({
    cubeComponent: byId('cubeone-component-2'),
});
const cube3 = new CubeOne({
    cubeComponent: byId('cubeone-component-3'),
});
const cube4 = new CubeOne({
    cubeComponent: byId('cubeone-component-4'),
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
        cube3.X({ skipTriggerEvent: true });
    else if (payload.action === 'y')
        cube2.y({ skipTriggerEvent: true });
    else if (payload.action === '-y')
        cube2.Y({ skipTriggerEvent: true });
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
        cube4.X({ skipTriggerEvent: true });
    else if (payload.action === 'y')
        cube1.y({ skipTriggerEvent: true });
    else if (payload.action === '-y')
        cube1.Y({ skipTriggerEvent: true });
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
        cube1.X({ skipTriggerEvent: true });
    else if (payload.action === 'y')
        cube4.y({ skipTriggerEvent: true });
    else if (payload.action === '-y')
        cube4.Y({ skipTriggerEvent: true });
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
        cube2.X({ skipTriggerEvent: true });
    else if (payload.action === 'y')
        cube3.y({ skipTriggerEvent: true });
    else if (payload.action === '-y')
        cube3.Y({ skipTriggerEvent: true });
});

//----------

cubeOne.solve = () => {
    cubeOne.cubes.forEach(cube => cube.gotoState('uf'));
};

window.cubeOne = cubeOne;

const btnCubeOne = byId('btn-cube-one');
btnCubeOne.addEventListener('click', (ev) => {
    if (cubeOneSceneEl.classList.contains('left-side')) {
        cubeOneSceneEl.classList.remove('left-side');
        cubeOneSceneEl.classList.add('down-side');
    } else if (cubeOneSceneEl.classList.contains('down-side')) {
        cubeOneSceneEl.classList.remove('down-side');
        cubeOneSceneEl.classList.add('left-down-side');
    } else if (cubeOneSceneEl.classList.contains('left-down-side')) {
        cubeOneSceneEl.classList.remove('left-down-side');
    } else {
        cubeOneSceneEl.classList.add('left-side');
    }
});

//----------
log('cubeOne is available in console');