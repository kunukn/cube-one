;
'use strict';

import { debug, log, error } from './logger';

import { qs, qsa, byId } from './query';

import dictColors from './dictionaries/dict-colors';

import {
    cloneObject,
    nextState,
    getLeft,
    getRight,
    getDown,
    getBack,
    getUp,
    getFront
} from './cube-util';

import dictCube from './dictionaries/dict-cube';
import dictCubeTransform from './dictionaries/dict-cube-transform';

import { STATES, STATES_ARRAY } from './constants';

function rAF(callback) {
    window.requestAnimationFrame(callback);
}

function nextFrame(callback) {
    rAF(() => {
        rAF(callback);
    });
}

const KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    a: 65,
    d: 68,
    e: 69,
    q: 81,
    s: 83,
    w: 87,
};


const EVENT_NAMES = {
    init: 'init',
    statechange: 'statechange',
    beforerotate: 'beforerotate',
    afterrotate: 'afterrotate',
};



class CubeOne {
    constructor(config) {

        if (!config || !config.cubeComponent) {
            error(`CubeOne element was not provided: ${config.cubeComponent}`);
            return;
        }

        this.cubeComponentEl = config.cubeComponent;
        this.stateInfoEl = config.infoComponent;

        this._appState = {
            code: nextState.first,
            swipeEnabled: true,
        };

        this._initCallbacks();
    }


    _initCallbacks() {
        this.callbacks = {};
        Object.keys(EVENT_NAMES).forEach((eventName, index) => this.callbacks[eventName] = []);
    }

    addCallbackForEvent(eventName, cb) {
        let collection = this.callbacks[(eventName = eventName.toLowerCase())];
        if (collection && typeof cb === 'function') {
            collection.push(cb);
        }
    };

    _triggerEvent(eventName, payload) {
        let collection = this.callbacks[eventName] || [],
            i, max;
        for (i = 0, max = collection.length; i < max; i++) {
            collection[i].call(this, eventName, payload);
        }
    }


    getState() {
        return cloneObject(this._appState);
    }

    setState(state) {
        const previousStateCode = this._appState.code,
            currentStateCode = state.code;

        this._appState = state;

        if (previousStateCode !== currentStateCode) {
            this._triggerEvent('statechange', {
                cube: this.cubeComponentEl,
                previousStateCode,
                currentStateCode
            });
        }
        this.updateAppInfo();
    }

    updateAppInfo() {
        if (this.stateInfoEl)
            this.stateInfoEl.innerHTML = `<label>State: </label><span class="state"> ${this.getState().code}</span>`;
    }


    transitionEnd(ev) {
        const cubeEl = this.cubeEl;
        cubeEl.style.transition = `0s`;
        nextFrame(_ => {
            this.updateUiFaces();
            cubeEl.style.transform = '';
            rAF(_ => {
                cubeEl.style.transition = '';

                const state = this.getState();
                state.swipeEnabled = true;
                this.setState(state);
            });
        });
    }


    init() {

        this.handleKeyEvent.bind(this);

        const cubeComponentEl = this.cubeComponentEl;

        const touchUpEl = qs('[data-type="up"].cubeone-js-touch', cubeComponentEl),
            touchFrontEl = qs('[data-type="front"].cubeone-js-touch', cubeComponentEl),
            touchRightEl = qs('[data-type="right"].cubeone-js-touch', cubeComponentEl),
            touchLeftEl = qs('[data-type="left"].cubeone-js-touch', cubeComponentEl),
            touchBackEl = qs('[data-type="back"].cubeone-js-touch', cubeComponentEl),
            touchDownEl = qs('[data-type="down"].cubeone-js-touch', cubeComponentEl);

        const cubeEl = qs('.cubeone-js-cube', cubeComponentEl);
        this.cubeEl = cubeEl;

        this.frontEl = qs('.cubeone-front > div', cubeEl);
        this.upEl = qs('.cubeone-up > div', cubeEl);
        this.rightEl = qs('.cubeone-right > div', cubeEl);
        this.leftEl = qs('.cubeone-left > div', cubeEl);
        this.backEl = qs('.cubeone-back > div', cubeEl);
        this.downEl = qs('.cubeone-down > div', cubeEl);

        const hammerOptions = {
            preventDefault: true
        };

        const swipeFront = new Hammer.Swipe();
        swipeFront.set({ direction: Hammer.DIRECTION_ALL });
        const swipeUp = new Hammer.Swipe();
        swipeUp.set({ direction: Hammer.DIRECTION_ALL });
        const swipeRight = new Hammer.Swipe();
        swipeRight.set({ direction: Hammer.DIRECTION_ALL });
        const swipeLeft = new Hammer.Swipe();
        swipeLeft.set({ direction: Hammer.DIRECTION_ALL });
        const swipeDown = new Hammer.Swipe();
        swipeDown.set({ direction: Hammer.DIRECTION_ALL });
        const swipeBack = new Hammer.Swipe();
        swipeBack.set({ direction: Hammer.DIRECTION_ALL });

        const hammerFront = new Hammer.Manager(touchFrontEl, {});
        hammerFront.add(swipeFront);

        const hammerUp = new Hammer.Manager(touchUpEl, {});
        hammerUp.add(swipeUp);

        const hammerRight = new Hammer.Manager(touchRightEl, {});
        hammerRight.add(swipeRight);

        const hammerLeft = new Hammer.Manager(touchLeftEl, {});
        hammerLeft.add(swipeLeft);

        const hammerDown = new Hammer.Manager(touchDownEl, {});
        hammerDown.add(swipeDown);

        const hammerBack = new Hammer.Manager(touchDownEl, {});
        hammerBack.add(swipeBack);


        hammerFront.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        hammerFront.add(new Hammer.Tap({ event: 'singletap' }));
        hammerFront.get('doubletap').recognizeWith('singletap');
        hammerFront.get('singletap').requireFailure('doubletap');

        hammerUp.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        hammerUp.add(new Hammer.Tap({ event: 'singletap' }));
        hammerUp.get('doubletap').recognizeWith('singletap');
        hammerUp.get('singletap').requireFailure('doubletap');

        hammerRight.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        hammerRight.add(new Hammer.Tap({ event: 'singletap' }));
        hammerRight.get('doubletap').recognizeWith('singletap');
        hammerRight.get('singletap').requireFailure('doubletap');

        hammerLeft.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        hammerLeft.add(new Hammer.Tap({ event: 'singletap' }));
        hammerLeft.get('doubletap').recognizeWith('singletap');
        hammerLeft.get('singletap').requireFailure('doubletap');

        hammerDown.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        hammerDown.add(new Hammer.Tap({ event: 'singletap' }));
        hammerDown.get('doubletap').recognizeWith('singletap');
        hammerDown.get('singletap').requireFailure('doubletap');

        hammerBack.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        hammerBack.add(new Hammer.Tap({ event: 'singletap' }));
        hammerBack.get('doubletap').recognizeWith('singletap');
        hammerBack.get('singletap').requireFailure('doubletap');

        hammerFront.on('singletap doubletap swipeup swipedown swiperight swipeleft', (ev) => {

            const type = ev.type;
            let element = ev.target;
            debug(`${type} ${element.dataset.type}`);

            // Find swipe element if event is invoke on child element
            if (element.dataset.type !== 'cubeone') {
                element = element.parentElement;
                if (element.dataset.type !== 'cubeone')
                    element = element.parentElement;
            }

            switch (type) {
                case 'singletap':
                    break;
                case 'doubletap':
                    this.tapped(element, ev.target.dataset.type);
                    break;
                case 'swipeup':
                    this.x();
                    break;
                case 'swiperight':
                    this.y();
                    break;
                case 'swipedown':
                    this._x();
                    break;
                case 'swipeleft':
                    this._y();
                    break;
            }
        });


        hammerUp.on('singletap doubletap swipeup swipedown swiperight swipeleft', (ev) => {
            const type = ev.type;
            let element = ev.target;
            debug(`${type} ${element.dataset.type}`);

            // Find swipe element if event is invoke on child element
            if (element.dataset.type !== 'cubeone') {
                element = element.parentElement;
                if (element.dataset.type !== 'cubeone')
                    element = element.parentElement;
            }

            switch (type) {
                case 'singletap':
                    break;
                case 'doubletap':
                    this.tapped(element, ev.target.dataset.type);
                    break;
                case 'swipeup':
                    this.x();
                    break;
                case 'swiperight':
                    this.z();
                    break;
                case 'swipedown':
                    this._x();
                    break;
                case 'swipeleft':
                    this._z();
                    break;
            }
        });


        hammerRight.on('singletap doubletap swipeup swipedown swiperight swipeleft', (ev) => {
            const type = ev.type;
            let element = ev.target;
            debug(`${type} ${element.dataset.type}`);

            // Find swipe element if event is invoke on child element
            if (element.dataset.type !== 'cubeone') {
                element = element.parentElement;
                if (element.dataset.type !== 'cubeone')
                    element = element.parentElement;
            }
            switch (type) {
                case 'singletap':
                    break;
                case 'doubletap':
                    this.tapped(element, ev.target.dataset.type);
                    break;
                case 'swipeup':
                    this._z();
                    break;
                case 'swiperight':
                    this.y();
                    break;
                case 'swipedown':
                    this.z();
                    break;
                case 'swipeleft':
                    this._y();
                    break;
            }
        });


        hammerLeft.on('singletap doubletap swipeup swipedown swiperight swipeleft', (ev) => {
            const type = ev.type;
            let element = ev.target;
            debug(`${type} ${element.dataset.type}`);

            // Find swipe element if event is invoke on child element
            if (element.dataset.type !== 'cubeone') {
                element = element.parentElement;
                if (element.dataset.type !== 'cubeone')
                    element = element.parentElement;
            }
            switch (type) {
                case 'singletap':
                    break;
                case 'doubletap':
                    this.tapped(element, ev.target.dataset.type);
                    break;
                case 'swipeup':
                    this.z();
                    break;
                case 'swiperight':
                    this.y();
                    break;
                case 'swipedown':
                    this._z();
                    break;
                case 'swipeleft':
                    this._y();
                    break;
            }
        });

        hammerDown.on('singletap doubletap swipeup swipedown swiperight swipeleft', (ev) => {
            const type = ev.type;
            let element = ev.target;
            debug(`${type} ${element.dataset.type}`);

            // Find swipe element if event is invoke on child element
            if (element.dataset.type !== 'cubeone') {
                element = element.parentElement;
                if (element.dataset.type !== 'cubeone')
                    element = element.parentElement;
            }
            switch (type) {
                case 'singletap':
                    break;
                case 'doubletap':
                    this.tapped(element, ev.target.dataset.type);
                    break;
                case 'swipeup':
                    this.x();
                    break;
                case 'swiperight':
                    this._z();
                    break;
                case 'swipedown':
                    this._x();
                    break;
                case 'swipeleft':
                    this.z();
                    break;
            }
        });


        hammerBack.on('singletap doubletap swipeup swipedown swiperight swipeleft', (ev) => {
            const type = ev.type;
            let element = ev.target;
            log(`${type} ${element.dataset.type}`);
        });


        this.cubeComponentEl.addEventListener('keydown', this.handleKeyEvent.bind(this), false);
        this.updateUiFaces();
        this.updateAppInfo();
        cubeEl.addEventListener('transitionend', this.transitionEnd.bind(this));

        this._triggerEvent('init', { cube: this.cubeComponentEl });
    }


    updateUiFaces() {

        let u, f, r, l, b, d;
        const state = this.getState();

        u = getUp(state.code);
        f = getFront(state.code);
        r = getRight(state.code);
        l = getLeft(state.code);
        b = getBack(state.code);
        d = getDown(state.code);

        this.upEl.style.backgroundColor = dictColors[u];
        this.frontEl.style.backgroundColor = dictColors[f];
        this.rightEl.style.backgroundColor = dictColors[r];
        this.leftEl.style.backgroundColor = dictColors[l];
        this.backEl.style.backgroundColor = dictColors[b];
        this.downEl.style.backgroundColor = dictColors[d];

        let t = dictCubeTransform[state.code]['u'];
        this.upEl.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';

        t = dictCubeTransform[state.code]['f'];
        this.frontEl.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';

        t = dictCubeTransform[state.code]['r'];
        this.rightEl.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';

        t = dictCubeTransform[state.code]['l'];
        this.leftEl.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';

        t = dictCubeTransform[state.code]['b'];
        this.backEl.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';

        t = dictCubeTransform[state.code]['d'];
        this.downEl.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';
    }

    tapped(element, target) {
        qs(`.cubeone-${target}.cubeone-face`, element).classList.toggle('tapped');
    }

    actionInvoke(action, ui) {
        let state = this.getState(),
            stateCode = state.code;

        if (!state.swipeEnabled)
            return;

        state.code = dictCube[stateCode][action]; // reducer
        state.swipeEnabled = false;
        this.setState(state);
        ui = ui.bind(this);
        ui();
    }

    gotoState(stateCode) {
        if (!STATES[stateCode])
            return;

        let state = this.getState();
        state.code = stateCode;
        this.setState(state);
        this.updateUiFaces();
    }

    setToRandomState() {
        let state = this.getState();
        state.code = STATES_ARRAY[(STATES_ARRAY.length * Math.random()) | 0];
        this.setState(state);
        this.updateUiFaces();
    }

    x() {
        this.actionInvoke('x', this.uix);
    }

    _x() {
        this.actionInvoke('-x', this.ui_x);
    }

    y() {
        this.actionInvoke('y', this.uiy);
    }

    _y() {
        this.actionInvoke('-y', this.ui_y);
    }


    z() {
        this.actionInvoke('z', this.uiz);
    }

    _z() {
        this.actionInvoke('-z', this.ui_z);
    }

    uix() {
        this.cubeEl.style.transform = `rotateX(90deg)`;
    }

    uiy() {
        this.cubeEl.style.transform = `rotateY(90deg)`;
    }

    ui_x() {
        this.cubeEl.style.transform = `rotateX(-90deg)`;
    }

    ui_y() {
        this.cubeEl.style.transform = `rotateY(-90deg)`;
    }

    uiz() {
        this.cubeEl.style.transform = `rotateZ(90deg)`;
    }

    ui_z() {
        this.cubeEl.style.transform = `rotateZ(-90deg)`;
    }

    reset() {
        this.gotoState('uf');
        return 'reset';
    }


    handleKeyEvent(event) {
        switch (event.keyCode) {
            case KEY.LEFT:
            case KEY.a:
                this._y();
                break;
            case KEY.UP:
                event.preventDefault();
            case KEY.w:
                this.x();
                break;
            case KEY.RIGHT:
            case KEY.d:
                this.y();
                break;
            case KEY.DOWN:
                event.preventDefault();
            case KEY.s:
                this._x();
                break;
            case KEY.q:
                this._z();
                break;
            case KEY.e:
                this.z();
                break;
        }
    }
}

export default CubeOne;