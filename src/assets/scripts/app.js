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
    'cubeone-component-5': qs('.js-state-info-4'),
    'cubeone-component-6': qs('.js-state-info-4'),
    'cubeone-component-7': qs('.js-state-info-4'),
    'cubeone-component-8': qs('.js-state-info-4'),
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

}

const cubeOne = {
    cubes: []
};



const cube1 = new CubeOne({
    cubeComponent: byId('cubeone-component-1'),
    faceSkins: {
        u: {
            bgColor: ''
        },
        f: {
            bgColor: ''
        },
        r: {
            bgColor: 'black'
        },
        l: {
            bgColor: ''
        },
        b: {
            bgColor: 'black'
        },
        d: {
            bgColor: 'black'
        },
    },
});
const cube2 = new CubeOne({
    cubeComponent: byId('cubeone-component-2'),
    faceSkins: {
        u: {
            bgColor: ''
        },
        f: {
            bgColor: ''
        },
        r: {
            bgColor: ''
        },
        l: {
            bgColor: 'black'
        },
        b: {
            bgColor: 'black'
        },
        d: {
            bgColor: 'black'
        },
    },
});
const cube3 = new CubeOne({
    cubeComponent: byId('cubeone-component-3'),
    faceSkins: {
        u: {
            bgColor: ''
        },
        f: {
            bgColor: ''
        },
        r: {
            bgColor: 'black'
        },
        l: {
            bgColor: ''
        },
        b: {
            bgColor: 'black'
        },
        d: {
            bgColor: 'black'
        },
    },
});
const cube4 = new CubeOne({
    cubeComponent: byId('cubeone-component-4'),
    faceSkins: {
        u: {
            bgColor: ''
        },
        f: {
            bgColor: ''
        },
        r: {
            bgColor: ''
        },
        l: {
            bgColor: 'black'
        },
        b: {
            bgColor: 'black'
        },
        d: {
            bgColor: 'black'
        },
    },
});
const cube5 = new CubeOne({
    cubeComponent: byId('cubeone-component-5'),
    faceSkins: {
        u: {
            bgColor: ''
        },
        f: {
            bgColor: 'black'
        },
        r: {
            bgColor: 'black'
        },
        l: {
            bgColor: ''
        },
        b: {
            bgColor: ''
        },
        d: {
            bgColor: 'black'
        },
    },

});
const cube6 = new CubeOne({
    cubeComponent: byId('cubeone-component-6'),
    faceSkins: {
        u: {
            bgColor: ''
        },
        f: {
            bgColor: 'black'
        },
        r: {
            bgColor: ''
        },
        l: {
            bgColor: 'black'
        },
        b: {
            bgColor: ''
        },
        d: {
            bgColor: 'black'
        },
    },
});
const cube7 = new CubeOne({
    cubeComponent: byId('cubeone-component-7'),
    faceSkins: {
        u: {
            bgColor: ''
        },
        f: {
            bgColor: 'black'
        },
        r: {
            bgColor: 'black'
        },
        l: {
            bgColor: ''
        },
        b: {
            bgColor: ''
        },
        d: {
            bgColor: 'black'
        },
    },
});
const cube8 = new CubeOne({
    cubeComponent: byId('cubeone-component-8'),
    faceSkins: {
        u: {
            bgColor: ''
        },
        f: {
            bgColor: 'black'
        },
        r: {
            bgColor: ''
        },
        l: {
            bgColor: 'black'
        },
        b: {
            bgColor: ''
        },
        d: {
            bgColor: 'black'
        },
    },
});


cube1.addCallbackForEvent('statechange', statechangeCallback);
cube1.init();
//cube1.setToRandomState();
cubeOne.cubes.push(cube1);

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

// //----------


cube2.addCallbackForEvent('statechange', statechangeCallback);
cube2.init();
// cube2.setToRandomState();
cubeOne.cubes.push(cube2);

// cube2.addCallbackForEvent('beforerotate', (eventName, payload) => {
//     if (payload.action === 'x')
//         cube4.x({ skipTriggerEvent: true });
//     else if (payload.action === '-x')
//         cube4.X({ skipTriggerEvent: true });
//     else if (payload.action === 'y')
//         cube1.y({ skipTriggerEvent: true });
//     else if (payload.action === '-y')
//         cube1.Y({ skipTriggerEvent: true });
// });


// //----------


cube3.addCallbackForEvent('statechange', statechangeCallback);
cube3.init();
// cube3.setToRandomState();
cubeOne.cubes.push(cube3);

// cube3.addCallbackForEvent('beforerotate', (eventName, payload) => {
//     if (payload.action === 'x')
//         cube1.x({ skipTriggerEvent: true });
//     else if (payload.action === '-x')
//         cube1.X({ skipTriggerEvent: true });
//     else if (payload.action === 'y')
//         cube4.y({ skipTriggerEvent: true });
//     else if (payload.action === '-y')
//         cube4.Y({ skipTriggerEvent: true });
// });

// //----------


cube4.addCallbackForEvent('statechange', statechangeCallback);
cube4.init();
// cube4.setToRandomState();
cubeOne.cubes.push(cube4);

// cube4.addCallbackForEvent('beforerotate', (eventName, payload) => {
//     if (payload.action === 'x')
//         cube2.x({ skipTriggerEvent: true });
//     else if (payload.action === '-x')
//         cube2.X({ skipTriggerEvent: true });
//     else if (payload.action === 'y')
//         cube3.y({ skipTriggerEvent: true });
//     else if (payload.action === '-y')
//         cube3.Y({ skipTriggerEvent: true });
// });

// //----------

cube5.addCallbackForEvent('statechange', statechangeCallback);
cube5.init();
cubeOne.cubes.push(cube5);

cube6.addCallbackForEvent('statechange', statechangeCallback);
cube6.init();
cubeOne.cubes.push(cube6);

cube7.addCallbackForEvent('statechange', statechangeCallback);
cube7.init();
cubeOne.cubes.push(cube7);

cube8.addCallbackForEvent('statechange', statechangeCallback);
cube8.init();
cubeOne.cubes.push(cube8);




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