'use strict';

import '../styles/app.scss';

import { log } from './logger';

import { qs, qsa, byId } from './query';

import CubeOne from './cube-one';

import dictCubeSkins from './dictionaries/dict-cube-skins';

//log('App running');

const states = {};
const infos = {
    'cubeone-component-1': qs('.js-state-info-1'),
    'cubeone-component-2': qs('.js-state-info-2'),
    'cubeone-component-3': qs('.js-state-info-3'),
    'cubeone-component-4': qs('.js-state-info-4'),
    'cubeone-component-5': qs('.js-state-info-5'),
    'cubeone-component-6': qs('.js-state-info-6'),
    'cubeone-component-7': qs('.js-state-info-7'),
    'cubeone-component-8': qs('.js-state-info-8'),
}

function statechangeCallback(eventName, payload) {
    states[payload.cube.id] = payload.currentStateCode;

    checkForComplete();

    let info = infos[payload.cube.id];
    if (info)
        info.innerHTML = `<span class="state"> ${payload.currentStateCode}</span>`;
}

function initCallback(eventName, payload) {}

const bodyWrapperEl = qs('.body-wrapper');
const cubeOneSceneEl = qs('.cubeone-scene');



function checkForComplete() {
    let keys = Object.keys(states),
        isComplete = false,
        stateCode;

    if (keys.length >= 8) {
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
    //         bgColor: ''
    //     },
    //     f: {
    //         bgColor: ''
    //     },
    //     r: {
    //         bgColor: 'black'
    //     },
    //     l: {
    //         bgColor: ''
    //     },
    //     b: {
    //         bgColor: 'black'
    //     },
    //     d: {
    //         bgColor: 'black'
    //     },
    // },
});
const cube2 = new CubeOne({
    cubeComponent: byId('cubeone-component-2'),
    // faceSkins: {
    //     u: {
    //         bgColor: ''
    //     },
    //     f: {
    //         bgColor: ''
    //     },
    //     r: {
    //         bgColor: ''
    //     },
    //     l: {
    //         bgColor: 'black'
    //     },
    //     b: {
    //         bgColor: 'black'
    //     },
    //     d: {
    //         bgColor: 'black'
    //     },
    // },
});
const cube3 = new CubeOne({
    cubeComponent: byId('cubeone-component-3'),
    // faceSkins: {
    //     u: {
    //         bgColor: ''
    //     },
    //     f: {
    //         bgColor: ''
    //     },
    //     r: {
    //         bgColor: 'black'
    //     },
    //     l: {
    //         bgColor: ''
    //     },
    //     b: {
    //         bgColor: 'black'
    //     },
    //     d: {
    //         bgColor: 'black'
    //     },
    // },
});
const cube4 = new CubeOne({
    cubeComponent: byId('cubeone-component-4'),
    // faceSkins: {
    //     u: {
    //         bgColor: ''
    //     },
    //     f: {
    //         bgColor: ''
    //     },
    //     r: {
    //         bgColor: ''
    //     },
    //     l: {
    //         bgColor: 'black'
    //     },
    //     b: {
    //         bgColor: 'black'
    //     },
    //     d: {
    //         bgColor: 'black'
    //     },
    // },
});
const cube5 = new CubeOne({
    cubeComponent: byId('cubeone-component-5'),
    // faceSkins: {
    //     u: {
    //         bgColor: ''
    //     },
    //     f: {
    //         bgColor: 'black'
    //     },
    //     r: {
    //         bgColor: 'black'
    //     },
    //     l: {
    //         bgColor: ''
    //     },
    //     b: {
    //         bgColor: ''
    //     },
    //     d: {
    //         bgColor: 'black'
    //     },
    // },

});
const cube6 = new CubeOne({
    cubeComponent: byId('cubeone-component-6'),
    // faceSkins: {
    //     u: {
    //         bgColor: ''
    //     },
    //     f: {
    //         bgColor: 'black'
    //     },
    //     r: {
    //         bgColor: ''
    //     },
    //     l: {
    //         bgColor: 'black'
    //     },
    //     b: {
    //         bgColor: ''
    //     },
    //     d: {
    //         bgColor: 'black'
    //     },
    // },
});
const cube7 = new CubeOne({
    cubeComponent: byId('cubeone-component-7'),
    // faceSkins: {
    //     u: {
    //         bgColor: ''
    //     },
    //     f: {
    //         bgColor: 'black'
    //     },
    //     r: {
    //         bgColor: 'black'
    //     },
    //     l: {
    //         bgColor: ''
    //     },
    //     b: {
    //         bgColor: ''
    //     },
    //     d: {
    //         bgColor: 'black'
    //     },
    // },
});
const cube8 = new CubeOne({
    cubeComponent: byId('cubeone-component-8'),
    // faceSkins: {
    //     u: {
    //         bgColor: ''
    //     },
    //     f: {
    //         bgColor: 'black'
    //     },
    //     r: {
    //         bgColor: ''
    //     },
    //     l: {
    //         bgColor: 'black'
    //     },
    //     b: {
    //         bgColor: ''
    //     },
    //     d: {
    //         bgColor: 'black'
    //     },
    // },
});


cube1.addCallbackForEvent('statechange', statechangeCallback);
cube1.init();
cube1.setToRandomState();
// cube1.gotoState('uf');
cube1.addCallbackForEvent('beforerotate', (eventName, payload) => {
    if (payload.action === 'x') {
        cube3.x({ skipTriggerEvent: true });
        cube5.x({ skipTriggerEvent: true });
        cube7.x({ skipTriggerEvent: true });
    } else if (payload.action === '-x') {
        cube3.X({ skipTriggerEvent: true });
        cube5.X({ skipTriggerEvent: true });
        cube7.X({ skipTriggerEvent: true });
    } else if (payload.action === 'y') {
        cube2.y({ skipTriggerEvent: true });
        cube5.y({ skipTriggerEvent: true });
        cube6.y({ skipTriggerEvent: true });
    } else if (payload.action === '-y') {
        cube2.Y({ skipTriggerEvent: true });
        cube5.Y({ skipTriggerEvent: true });
        cube6.Y({ skipTriggerEvent: true });
    } else if (payload.action === 'z') {
        cube2.z({ skipTriggerEvent: true });
        cube3.z({ skipTriggerEvent: true });
        cube4.z({ skipTriggerEvent: true });
    } else if (payload.action === '-z') {
        cube2.Z({ skipTriggerEvent: true });
        cube3.Z({ skipTriggerEvent: true });
        cube4.Z({ skipTriggerEvent: true });
    }
});
cubeOne.cubes.push(cube1);
//----------


cube2.addCallbackForEvent('statechange', statechangeCallback);
cube2.init();
cube2.setToRandomState();
// cube2.gotoState('uf');
cube2.addCallbackForEvent('beforerotate', (eventName, payload) => {
    if (payload.action === 'x') {
        cube4.x({ skipTriggerEvent: true });
        cube6.x({ skipTriggerEvent: true });
        cube8.x({ skipTriggerEvent: true });
    } else if (payload.action === '-x') {
        cube4.X({ skipTriggerEvent: true });
        cube6.X({ skipTriggerEvent: true });
        cube8.X({ skipTriggerEvent: true });
    } else if (payload.action === 'y') {
        cube1.y({ skipTriggerEvent: true });
        cube5.y({ skipTriggerEvent: true });
        cube6.y({ skipTriggerEvent: true });
    } else if (payload.action === '-y') {
        cube1.Y({ skipTriggerEvent: true });
        cube5.Y({ skipTriggerEvent: true });
        cube6.Y({ skipTriggerEvent: true });
    } else if (payload.action === 'z') {
        cube1.z({ skipTriggerEvent: true });
        cube3.z({ skipTriggerEvent: true });
        cube4.z({ skipTriggerEvent: true });
    } else if (payload.action === '-z') {
        cube1.Z({ skipTriggerEvent: true });
        cube3.Z({ skipTriggerEvent: true });
        cube4.Z({ skipTriggerEvent: true });
    }
});
cubeOne.cubes.push(cube2);
//----------


cube3.addCallbackForEvent('statechange', statechangeCallback);
cube3.init();
cube3.setToRandomState();
// cube3.gotoState('uf');
cube3.addCallbackForEvent('beforerotate', (eventName, payload) => {
    if (payload.action === 'x') {
        cube1.x({ skipTriggerEvent: true });
        cube5.x({ skipTriggerEvent: true });
        cube7.x({ skipTriggerEvent: true });
    } else if (payload.action === '-x') {
        cube1.X({ skipTriggerEvent: true });
        cube5.X({ skipTriggerEvent: true });
        cube7.X({ skipTriggerEvent: true });
    } else if (payload.action === 'y') {
        cube4.y({ skipTriggerEvent: true });
        cube7.y({ skipTriggerEvent: true });
        cube8.y({ skipTriggerEvent: true });
    } else if (payload.action === '-y') {
        cube4.Y({ skipTriggerEvent: true });
        cube7.Y({ skipTriggerEvent: true });
        cube8.Y({ skipTriggerEvent: true });
    } else if (payload.action === 'z') {
        cube1.z({ skipTriggerEvent: true });
        cube2.z({ skipTriggerEvent: true });
        cube4.z({ skipTriggerEvent: true });
    } else if (payload.action === '-z') {
        cube1.Z({ skipTriggerEvent: true });
        cube2.Z({ skipTriggerEvent: true });
        cube4.Z({ skipTriggerEvent: true });
    }
});
cubeOne.cubes.push(cube3);
//----------


cube4.addCallbackForEvent('statechange', statechangeCallback);
cube4.init();
cube4.setToRandomState();
// cube4.gotoState('uf');
cube4.addCallbackForEvent('beforerotate', (eventName, payload) => {
    if (payload.action === 'x') {
        cube2.x({ skipTriggerEvent: true });
        cube6.x({ skipTriggerEvent: true });
        cube8.x({ skipTriggerEvent: true });
    } else if (payload.action === '-x') {
        cube2.X({ skipTriggerEvent: true });
        cube6.X({ skipTriggerEvent: true });
        cube8.X({ skipTriggerEvent: true });
    } else if (payload.action === 'y') {
        cube3.y({ skipTriggerEvent: true });
        cube7.y({ skipTriggerEvent: true });
        cube8.y({ skipTriggerEvent: true });
    } else if (payload.action === '-y') {
        cube3.Y({ skipTriggerEvent: true });
        cube7.Y({ skipTriggerEvent: true });
        cube8.Y({ skipTriggerEvent: true });
    } else if (payload.action === 'z') {
        cube1.z({ skipTriggerEvent: true });
        cube2.z({ skipTriggerEvent: true });
        cube3.z({ skipTriggerEvent: true });
    } else if (payload.action === '-z') {
        cube1.Z({ skipTriggerEvent: true });
        cube2.Z({ skipTriggerEvent: true });
        cube3.Z({ skipTriggerEvent: true });
    }
});
cubeOne.cubes.push(cube4);
//----------

cube5.addCallbackForEvent('statechange', statechangeCallback);
cube5.init();
cube5.setToRandomState();
// cube5.gotoState('uf');
cube5.addCallbackForEvent('beforerotate', (eventName, payload) => {
    if (payload.action === 'x') {
        cube1.x({ skipTriggerEvent: true });
        cube3.x({ skipTriggerEvent: true });
        cube7.x({ skipTriggerEvent: true });
    } else if (payload.action === '-x') {
        cube1.X({ skipTriggerEvent: true });
        cube3.X({ skipTriggerEvent: true });
        cube7.X({ skipTriggerEvent: true });
    } else if (payload.action === 'y') {
        cube1.y({ skipTriggerEvent: true });
        cube2.y({ skipTriggerEvent: true });
        cube6.y({ skipTriggerEvent: true });
    } else if (payload.action === '-y') {
        cube1.Y({ skipTriggerEvent: true });
        cube2.Y({ skipTriggerEvent: true });
        cube6.Y({ skipTriggerEvent: true });
    } else if (payload.action === 'z') {
        cube6.z({ skipTriggerEvent: true });
        cube7.z({ skipTriggerEvent: true });
        cube8.z({ skipTriggerEvent: true });
    } else if (payload.action === '-z') {
        cube6.Z({ skipTriggerEvent: true });
        cube7.Z({ skipTriggerEvent: true });
        cube8.Z({ skipTriggerEvent: true });
    }
});
cubeOne.cubes.push(cube5);
//----------

cube6.addCallbackForEvent('statechange', statechangeCallback);
cube6.init();
cube6.setToRandomState();
// cube6.gotoState('uf');
cube6.addCallbackForEvent('beforerotate', (eventName, payload) => {
    if (payload.action === 'x') {
        cube2.x({ skipTriggerEvent: true });
        cube4.x({ skipTriggerEvent: true });
        cube8.x({ skipTriggerEvent: true });
    } else if (payload.action === '-x') {
        cube2.X({ skipTriggerEvent: true });
        cube4.X({ skipTriggerEvent: true });
        cube8.X({ skipTriggerEvent: true });
    } else if (payload.action === 'y') {
        cube1.y({ skipTriggerEvent: true });
        cube2.y({ skipTriggerEvent: true });
        cube5.y({ skipTriggerEvent: true });
    } else if (payload.action === '-y') {
        cube1.Y({ skipTriggerEvent: true });
        cube2.Y({ skipTriggerEvent: true });
        cube5.Y({ skipTriggerEvent: true });
    } else if (payload.action === 'z') {
        cube5.z({ skipTriggerEvent: true });
        cube7.z({ skipTriggerEvent: true });
        cube8.z({ skipTriggerEvent: true });
    } else if (payload.action === '-z') {
        cube5.Z({ skipTriggerEvent: true });
        cube7.Z({ skipTriggerEvent: true });
        cube8.Z({ skipTriggerEvent: true });
    }
});
cubeOne.cubes.push(cube6);
//----------

cube7.addCallbackForEvent('statechange', statechangeCallback);
cube7.init();
cube7.setToRandomState();
// cube7.gotoState('uf');
cube7.addCallbackForEvent('beforerotate', (eventName, payload) => {
    if (payload.action === 'x') {
        cube1.x({ skipTriggerEvent: true });
        cube3.x({ skipTriggerEvent: true });
        cube5.x({ skipTriggerEvent: true });
    } else if (payload.action === '-x') {
        cube1.X({ skipTriggerEvent: true });
        cube3.X({ skipTriggerEvent: true });
        cube5.X({ skipTriggerEvent: true });
    } else if (payload.action === 'y') {
        cube3.y({ skipTriggerEvent: true });
        cube4.y({ skipTriggerEvent: true });
        cube8.y({ skipTriggerEvent: true });
    } else if (payload.action === '-y') {
        cube3.Y({ skipTriggerEvent: true });
        cube4.Y({ skipTriggerEvent: true });
        cube8.Y({ skipTriggerEvent: true });
    } else if (payload.action === 'z') {
        cube5.z({ skipTriggerEvent: true });
        cube6.z({ skipTriggerEvent: true });
        cube8.z({ skipTriggerEvent: true });
    } else if (payload.action === '-z') {
        cube5.Z({ skipTriggerEvent: true });
        cube6.Z({ skipTriggerEvent: true });
        cube8.Z({ skipTriggerEvent: true });
    }
});
cubeOne.cubes.push(cube7);
//----------



cube8.addCallbackForEvent('statechange', statechangeCallback);
cube8.init();
cube8.setToRandomState();
// cube8.gotoState('uf');
cube8.addCallbackForEvent('beforerotate', (eventName, payload) => {
    if (payload.action === 'x') {
        cube2.x({ skipTriggerEvent: true });
        cube4.x({ skipTriggerEvent: true });
        cube6.x({ skipTriggerEvent: true });
    } else if (payload.action === '-x') {
        cube2.X({ skipTriggerEvent: true });
        cube4.X({ skipTriggerEvent: true });
        cube6.X({ skipTriggerEvent: true });
    } else if (payload.action === 'y') {
        cube3.y({ skipTriggerEvent: true });
        cube4.y({ skipTriggerEvent: true });
        cube7.y({ skipTriggerEvent: true });
    } else if (payload.action === '-y') {
        cube3.Y({ skipTriggerEvent: true });
        cube4.Y({ skipTriggerEvent: true });
        cube7.Y({ skipTriggerEvent: true });
    } else if (payload.action === 'z') {
        cube5.z({ skipTriggerEvent: true });
        cube6.z({ skipTriggerEvent: true });
        cube7.z({ skipTriggerEvent: true });
    } else if (payload.action === '-z') {
        cube5.Z({ skipTriggerEvent: true });
        cube6.Z({ skipTriggerEvent: true });
        cube7.Z({ skipTriggerEvent: true });
    }
});
cubeOne.cubes.push(cube8);
//----------


cubeOne.solve = () => {
    cubeOne.cubes.forEach(cube => cube.gotoState('uf'));
};

cubeOne.random = () => {
    cubeOne.cubes.forEach(cube => cube.setToRandomState());
};

window.cubeOne = cubeOne;

const btnCubeOne = byId('btn-cube-one');
btnCubeOne.addEventListener('click', (ev) => {
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

//----------
log('cubeOne is available in console');