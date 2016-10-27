'use strict';

import '../styles/app.scss';

import { log } from './logger';

import { qs, qsa, byId } from './query';

import CubeOne from './cube-one';

import dictCubeSkins from './dictionaries/dict-cube-skins';

//log('App running');

const states = {};
const infos = {
    'cubeone-component-1': byId('cubeone-state-info-1'),
    'cubeone-component-2': byId('cubeone-state-info-2'),
    'cubeone-component-3': byId('cubeone-state-info-3'),
    'cubeone-component-4': byId('cubeone-state-info-4'),
    'cubeone-component-5': byId('cubeone-state-info-5'),
    'cubeone-component-6': byId('cubeone-state-info-6'),
    'cubeone-component-7': byId('cubeone-state-info-7'),
    'cubeone-component-8': byId('cubeone-state-info-8'),
}

function statechangeCallback(eventName, payload) {
    states[payload.cube.id] = payload.currentStateCode;
    checkForComplete();

    let info = infos[payload.cube.id];
    if (info)
        info.innerHTML = `${payload.currentStateCode}`;
}

function initCallback(eventName, payload) {
    let info = infos[payload.cube.id];
    if (info)
        info.innerHTML = `${payload.state.code}`;
}

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



// const cube1 = new CubeOne({
//     cubeComponent: byId('cubeone-component-1'),
//     // faceSkins: {
//     //     u: {
//     //         bgColor: 'red'
//     //     },
//     //     f: {
//     //         bgColor: 'pink'
//     //     },
//     //     r: {
//     //         bgColor: 'yellow'
//     //     },
//     //     l: {
//     //         bgColor: 'green'
//     //     },
//     //     b: {
//     //         bgColor: 'dodgerblue'
//     //     },
//     //     d: {
//     //         bgColor: 'teal'
//     //     },
//     // },
// });
// const cube2 = new CubeOne({
//     cubeComponent: byId('cubeone-component-2'),
// });
// const cube3 = new CubeOne({
//     cubeComponent: byId('cubeone-component-3'),
// });
// const cube4 = new CubeOne({
//     cubeComponent: byId('cubeone-component-4'),
// });
// const cube5 = new CubeOne({
//     cubeComponent: byId('cubeone-component-5'),
// });
// const cube6 = new CubeOne({
//     cubeComponent: byId('cubeone-component-6'),
// });
// const cube7 = new CubeOne({
//     cubeComponent: byId('cubeone-component-7'),
// });
// const cube8 = new CubeOne({
//     cubeComponent: byId('cubeone-component-8'),
// });

// let cube = cube1;
// cube.addCallbackForEvent('init', initCallback);
// cube.addCallbackForEvent('statechange', statechangeCallback);
// cube.init();
// cube.setToRandomState();
// cubeOne.cubes.push(cube);
// cube.addCallbackForEvent('beforerotate', (eventName, payload) => {
//     if (payload.action === 'x') {
//         cube3.x({ skipTriggerEvent: true });
//     } else if (payload.action === '-x') {
//         cube3.X({ skipTriggerEvent: true });
//     } else if (payload.action === 'y') {
//         cube2.y({ skipTriggerEvent: true });
//     } else if (payload.action === '-y') {
//         cube2.Y({ skipTriggerEvent: true });
//     }
// });

// //----------
// cube = cube2;
// cube.addCallbackForEvent('init', initCallback);
// cube.addCallbackForEvent('statechange', statechangeCallback);
// cube.init();
// cube.setToRandomState();
// cubeOne.cubes.push(cube);
// cube.addCallbackForEvent('beforerotate', (eventName, payload) => {
//     if (payload.action === 'x') {
//         cube4.x({ skipTriggerEvent: true });
//     } else if (payload.action === '-x') {
//         cube4.X({ skipTriggerEvent: true });
//     } else if (payload.action === 'y') {
//         cube1.y({ skipTriggerEvent: true });
//     } else if (payload.action === '-y') {
//         cube1.Y({ skipTriggerEvent: true });
//     }
// });


// //----------
// cube = cube3;
// cube.addCallbackForEvent('init', initCallback);
// cube.addCallbackForEvent('statechange', statechangeCallback);
// cube.init();
// cube.setToRandomState();
// cubeOne.cubes.push(cube);
// cube.addCallbackForEvent('beforerotate', (eventName, payload) => {
//     if (payload.action === 'x') {
//         cube1.x({ skipTriggerEvent: true });
//     } else if (payload.action === '-x') {
//         cube1.X({ skipTriggerEvent: true });
//     } else if (payload.action === 'y') {
//         cube4.y({ skipTriggerEvent: true });
//     } else if (payload.action === '-y') {
//         cube4.Y({ skipTriggerEvent: true });
//     }
// });

// //----------
// cube = cube4;
// cube.addCallbackForEvent('init', initCallback);
// cube.addCallbackForEvent('statechange', statechangeCallback);
// cube.init();
// cube.setToRandomState();
// cubeOne.cubes.push(cube);
// cube.addCallbackForEvent('beforerotate', (eventName, payload) => {
//     if (payload.action === 'x') {
//         cube2.x({ skipTriggerEvent: true });
//     } else if (payload.action === '-x') {
//         cube2.X({ skipTriggerEvent: true });
//     } else if (payload.action === 'y') {
//         cube3.y({ skipTriggerEvent: true });
//     } else if (payload.action === '-y') {
//         cube3.Y({ skipTriggerEvent: true });
//     }
// });


// //----------
// cube = cube5;
// cube.init();
// cube.setToRandomState();
// cubeOne.cubes.push(cube);


// //----------
// cube = cube6;
// cube.init();
// cube.setToRandomState();
// cubeOne.cubes.push(cube);


// //----------
// cube = cube7;
// cube.init();
// cube.setToRandomState();
// cubeOne.cubes.push(cube);


// //----------
// cube = cube8;
// cube.init();
// cube.setToRandomState();
// cubeOne.cubes.push(cube);


//----------


cubeOne.solve = () => {
    cubeOne.cubes.forEach(cube => cube.gotoState('uf'));
};

cubeOne.random = () => {
    cubeOne.cubes.forEach(cube => cube.setToRandomState());
};


window.cubeOne = cubeOne;

const btnCubeOneRotate = byId('btn-cube-one-rotate-view');
btnCubeOneRotate.addEventListener('click', (ev) => {
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


const btnCubeOneSolve = byId('btn-cube-one-solve');
btnCubeOneSolve.addEventListener('click', (ev) => {
    cubeOne.solve();
});

const btnCubeOneRandom = byId('btn-cube-one-random');
btnCubeOneRandom.addEventListener('click', (ev) => {
    cubeOne.random();
});

// const cubeoneScene = qs('.cubeone-scene');
// byId('btn-cube-one-temp').addEventListener('click', (ev) => {
//     cubeoneScene.classList.toggle('left-setup');
//     cubeoneScene.classList.toggle('x2-left');
// });




//----------
log('cubeOne is available in console');