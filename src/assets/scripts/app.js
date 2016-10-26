'use strict';

import '../styles/app.scss';

import { log } from './logger';

import { qs, qsa, byId } from './query';

import CubeOne from './cube-one';

import dictCubeSkins from './dictionaries/dict-cube-skins';

//log('App running');

const states = {};
const appInfoEl = qs('.app-info');
const infos = {
    'cubeone-component-1': qs('.js-state-info-1', appInfoEl),
    'cubeone-component-2': qs('.js-state-info-2', appInfoEl),
    'cubeone-component-3': qs('.js-state-info-3', appInfoEl),
    'cubeone-component-4': qs('.js-state-info-4', appInfoEl),
    'cubeone-component-5': qs('.js-state-info-5', appInfoEl),
    'cubeone-component-6': qs('.js-state-info-6', appInfoEl),
    'cubeone-component-7': qs('.js-state-info-7', appInfoEl),
    'cubeone-component-8': qs('.js-state-info-8', appInfoEl),
    'cubeone-component-9': qs('.js-state-info-9', appInfoEl),
}

function statechangeCallback(eventName, payload) {
    states[payload.cube.id] = payload.currentStateCode;
    checkForComplete();

    let info = infos[payload.cube.id];
    if (info)
        info.innerHTML = `<label></label><span class="state"> ${payload.currentStateCode}</span>`;
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
        bodyWrapperEl.style.backgroundColor = dictCubeSkins[`${front}-dark`];
    } else if (bodyWrapperEl.classList.contains('with-background-image')) {
        bodyWrapperEl.classList.remove('with-background-image');
        bodyWrapperEl.style.backgroundColor = '';
    }
}

const cubeOne = {
    cubes: []
};



const cube1 = new CubeOne({
    cubeComponent: byId('cubeone-component-1'),
    // faceSkins: {
    //     u: {
    //         bgColor: 'red'
    //     },
    //     f: {
    //         bgColor: 'pink'
    //     },
    //     r: {
    //         bgColor: 'yellow'
    //     },
    //     l: {
    //         bgColor: 'green'
    //     },
    //     b: {
    //         bgColor: 'dodgerblue'
    //     },
    //     d: {
    //         bgColor: 'teal'
    //     },
    // },
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
const cube5 = new CubeOne({
    cubeComponent: byId('cubeone-component-5'),
});
const cube6 = new CubeOne({
    cubeComponent: byId('cubeone-component-6'),
});

const cube7 = new CubeOne({
    cubeComponent: byId('cubeone-component-7'),
});

const cube8 = new CubeOne({
    cubeComponent: byId('cubeone-component-8'),
});

const cube9 = new CubeOne({
    cubeComponent: byId('cubeone-component-9'),
});

let cube = cube1;
cube.addCallbackForEvent('init', initCallback);
cube.addCallbackForEvent('statechange', statechangeCallback);
cube.init();
cube.setToRandomState();
cubeOne.cubes.push(cube);

cube.addCallbackForEvent('beforerotate', (eventName, payload) => {
    if (payload.action === 'x') {
        cube4.x({ skipTriggerEvent: true });
        cube7.x({ skipTriggerEvent: true });
    } else if (payload.action === '-x') {
        cube4.X({ skipTriggerEvent: true });
        cube7.X({ skipTriggerEvent: true });
    } else if (payload.action === 'y') {
        cube2.y({ skipTriggerEvent: true });
        cube3.y({ skipTriggerEvent: true });
    } else if (payload.action === '-y') {
        cube2.Y({ skipTriggerEvent: true });
        cube3.Y({ skipTriggerEvent: true });
    }
});

//----------

cube = cube2;
cube.addCallbackForEvent('init', initCallback);
cube.addCallbackForEvent('statechange', statechangeCallback);
cube.init();
cube.setToRandomState();
cubeOne.cubes.push(cube);

cube.addCallbackForEvent('beforerotate', (eventName, payload) => {
    if (payload.action === 'x') {
        cube5.x({ skipTriggerEvent: true });
        cube8.x({ skipTriggerEvent: true });
    } else if (payload.action === '-x') {
        cube5.X({ skipTriggerEvent: true });
        cube8.X({ skipTriggerEvent: true });
    } else if (payload.action === 'y') {
        cube1.y({ skipTriggerEvent: true });
        cube3.y({ skipTriggerEvent: true });
    } else if (payload.action === '-y') {
        cube1.Y({ skipTriggerEvent: true });
        cube3.Y({ skipTriggerEvent: true });
    }
});


//----------

cube = cube3;
cube.addCallbackForEvent('init', initCallback);
cube.addCallbackForEvent('statechange', statechangeCallback);
cube.init();
cube.setToRandomState();
cubeOne.cubes.push(cube);

cube.addCallbackForEvent('beforerotate', (eventName, payload) => {
    if (payload.action === 'x') {
        cube6.x({ skipTriggerEvent: true });
        cube9.x({ skipTriggerEvent: true });
    } else if (payload.action === '-x') {
        cube6.X({ skipTriggerEvent: true });
        cube9.X({ skipTriggerEvent: true });
    } else if (payload.action === 'y') {
        cube1.y({ skipTriggerEvent: true });
        cube2.y({ skipTriggerEvent: true });
    } else if (payload.action === '-y') {
        cube1.Y({ skipTriggerEvent: true });
        cube2.Y({ skipTriggerEvent: true });
    }
});

//----------

cube = cube4;
cube.addCallbackForEvent('init', initCallback);
cube.addCallbackForEvent('statechange', statechangeCallback);
cube.init();
cube.setToRandomState();
cubeOne.cubes.push(cube);

cube.addCallbackForEvent('beforerotate', (eventName, payload) => {
    if (payload.action === 'x') {
        cube1.x({ skipTriggerEvent: true });
        cube7.x({ skipTriggerEvent: true });
    } else if (payload.action === '-x') {
        cube1.X({ skipTriggerEvent: true });
        cube7.X({ skipTriggerEvent: true });
    } else if (payload.action === 'y') {
        cube5.y({ skipTriggerEvent: true });
        cube6.y({ skipTriggerEvent: true });
    } else if (payload.action === '-y') {
        cube5.Y({ skipTriggerEvent: true });
        cube6.Y({ skipTriggerEvent: true });
    }
});

//----------


cube = cube5;
cube.addCallbackForEvent('init', initCallback);
cube.addCallbackForEvent('statechange', statechangeCallback);
cube.init();
cube.setToRandomState();
cubeOne.cubes.push(cube);

cube.addCallbackForEvent('beforerotate', (eventName, payload) => {
    if (payload.action === 'x') {
        cube2.x({ skipTriggerEvent: true });
        cube8.x({ skipTriggerEvent: true });
    } else if (payload.action === '-x') {
        cube2.X({ skipTriggerEvent: true });
        cube8.X({ skipTriggerEvent: true });
    } else if (payload.action === 'y') {
        cube4.y({ skipTriggerEvent: true });
        cube6.y({ skipTriggerEvent: true });
    } else if (payload.action === '-y') {
        cube4.Y({ skipTriggerEvent: true });
        cube6.Y({ skipTriggerEvent: true });
    }
});
//----------

cube = cube6;
cube.addCallbackForEvent('init', initCallback);
cube.addCallbackForEvent('statechange', statechangeCallback);
cube.init();
cube.setToRandomState();
cubeOne.cubes.push(cube);

cube.addCallbackForEvent('beforerotate', (eventName, payload) => {
    if (payload.action === 'x') {
        cube3.x({ skipTriggerEvent: true });
        cube9.x({ skipTriggerEvent: true });
    } else if (payload.action === '-x') {
        cube3.X({ skipTriggerEvent: true });
        cube9.X({ skipTriggerEvent: true });
    } else if (payload.action === 'y') {
        cube4.y({ skipTriggerEvent: true });
        cube5.y({ skipTriggerEvent: true });
    } else if (payload.action === '-y') {
        cube4.Y({ skipTriggerEvent: true });
        cube5.Y({ skipTriggerEvent: true });
    }
});

//----------

cube = cube7;
cube.addCallbackForEvent('init', initCallback);
cube.addCallbackForEvent('statechange', statechangeCallback);
cube.init();
cube.setToRandomState();
cubeOne.cubes.push(cube);

cube.addCallbackForEvent('beforerotate', (eventName, payload) => {
    if (payload.action === 'x') {
        cube1.x({ skipTriggerEvent: true });
        cube4.x({ skipTriggerEvent: true });
    } else if (payload.action === '-x') {
        cube1.X({ skipTriggerEvent: true });
        cube4.X({ skipTriggerEvent: true });
    } else if (payload.action === 'y') {
        cube8.y({ skipTriggerEvent: true });
        cube9.y({ skipTriggerEvent: true });
    } else if (payload.action === '-y') {
        cube8.Y({ skipTriggerEvent: true });
        cube9.Y({ skipTriggerEvent: true });
    }
});


//----------

cube = cube8;
cube.addCallbackForEvent('init', initCallback);
cube.addCallbackForEvent('statechange', statechangeCallback);
cube.init();
cube.setToRandomState();
cubeOne.cubes.push(cube);

cube.addCallbackForEvent('beforerotate', (eventName, payload) => {
    if (payload.action === 'x') {
        cube2.x({ skipTriggerEvent: true });
        cube5.x({ skipTriggerEvent: true });
    } else if (payload.action === '-x') {
        cube2.X({ skipTriggerEvent: true });
        cube5.X({ skipTriggerEvent: true });
    } else if (payload.action === 'y') {
        cube7.y({ skipTriggerEvent: true });
        cube9.y({ skipTriggerEvent: true });
    } else if (payload.action === '-y') {
        cube7.Y({ skipTriggerEvent: true });
        cube9.Y({ skipTriggerEvent: true });
    }
});

//----------

cube = cube9;
cube.addCallbackForEvent('init', initCallback);
cube.addCallbackForEvent('statechange', statechangeCallback);
cube.init();
cube.setToRandomState();
cubeOne.cubes.push(cube);

cube.addCallbackForEvent('beforerotate', (eventName, payload) => {
    if (payload.action === 'x') {
        cube3.x({ skipTriggerEvent: true });
        cube6.x({ skipTriggerEvent: true });
    } else if (payload.action === '-x') {
        cube3.X({ skipTriggerEvent: true });
        cube6.X({ skipTriggerEvent: true });
    } else if (payload.action === 'y') {
        cube7.y({ skipTriggerEvent: true });
        cube8.y({ skipTriggerEvent: true });
    } else if (payload.action === '-y') {
        cube7.Y({ skipTriggerEvent: true });
        cube8.Y({ skipTriggerEvent: true });
    }
});

//----------
cubeOne.solve = () => {
    cubeOne.cubes.forEach(cube => cube.gotoState('uf'));
};

cubeOne.random = () => {
    cubeOne.cubes.forEach(cube => cube.setToRandomState());
};


window.cubeOne = cubeOne;

const btnCubeOneRotate = byId('btn-cube-one-rotate');
btnCubeOneRotate.addEventListener('click', (ev) => {
    if (cubeOneSceneEl.classList.contains('left-side')) {
        cubeOneSceneEl.classList.remove('left-side');
        cubeOneSceneEl.classList.add('down-side');
    } else if (cubeOneSceneEl.classList.contains('down-side')) {
        cubeOneSceneEl.classList.remove('down-side');
        cubeOneSceneEl.classList.add('back-side');
    } else if (cubeOneSceneEl.classList.contains('back-side')) {
        cubeOneSceneEl.classList.remove('back-side');
        cubeOneSceneEl.classList.add('back-left-side');
    } else if (cubeOneSceneEl.classList.contains('back-left-side')) {
        cubeOneSceneEl.classList.remove('back-left-side');
        cubeOneSceneEl.classList.add('back-down-side');
    } else if (cubeOneSceneEl.classList.contains('back-down-side')) {
        cubeOneSceneEl.classList.remove('back-down-side');
    } else {
        cubeOneSceneEl.classList.add('left-side');
    }
});


const btnCubeOneSolve = byId('btn-cube-one-solve');
btnCubeOneSolve.addEventListener('click', (ev) => {
    cubeOne.solve();
});

const btnCubeOneRandom = byId('btn-cube-one-random');
btnCubeOneRandom.addEventListener('click', (ev) => {
    cubeOne.random();
});


//----------
log('cubeOne is available in console');