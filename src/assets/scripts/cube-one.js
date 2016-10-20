;
'use strict';

import { log } from './logger';

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

import { STATES } from './constants';

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

const hammerOptions = {
    preventDefault: true
};

class CubeOne {
    constructor(config) {
        this.cubeComponentEl = config.cubeComponent;
        this.stateInfoEl = config.infoComponent;
        this._appState = {
            code: nextState.first,
            swipeEnabled: true,
        };
    }

    getState() {
        return cloneObject(this._appState);
    }

    setState(state) {
        this._appState = state;
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

        const touchUpEl = qs('.js-touch-up', cubeComponentEl),
            touchFrontEl = qs('.js-touch-front', cubeComponentEl),
            touchRightEl = qs('.js-touch-right', cubeComponentEl),
            touchLeftEl = qs('.js-touch-left', cubeComponentEl),
            touchBackEl = qs('.js-touch-back', cubeComponentEl),
            touchDownEl = qs('.js-touch-down', cubeComponentEl);

        const cubeEl = qs('.js-cube', cubeComponentEl);
        this.cubeEl = cubeEl;

        this.frontEl = qs('.front > div', cubeEl);
        this.upEl = qs('.up > div', cubeEl);
        this.rightEl = qs('.right > div', cubeEl);
        this.leftEl = qs('.left > div', cubeEl);
        this.backEl = qs('.back > div', cubeEl);
        this.downEl = qs('.down > div', cubeEl);

        const hammerFront = new Hammer(
            touchFrontEl,
            hammerOptions);
        const hammerUp = new Hammer(
            touchUpEl,
            hammerOptions);
        const hammerRight = new Hammer(
            touchRightEl,
            hammerOptions);
        const hammerLeft = new Hammer(
            touchLeftEl,
            hammerOptions);
        const hammerDown = new Hammer(
            touchDownEl,
            hammerOptions);

        hammerFront.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
        hammerUp.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
        hammerRight.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
        hammerLeft.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
        hammerDown.get('swipe').set({ direction: Hammer.DIRECTION_ALL });


        hammerFront.on('tap swipeup swipedown swiperight swipeleft', (ev) => {
            const type = ev.type;
            let element = ev.target;

            // Find swipe element if event is invoke on child element
            if (element.dataset.type !== 'swipe-component') {
                element = element.parentElement;
                if (element.dataset.type !== 'swipe-component')
                    element = element.parentElement;
            }

            switch (type) {
                case 'tap':
                    this.tap(element, ev.target.dataset.type);
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


        hammerUp.on('tap swipeup swipedown swiperight swipeleft', (ev) => {
            const type = ev.type;
            let element = ev.target;

            // Find swipe element if event is invoke on child element
            if (element.dataset.type !== 'swipe-component') {
                element = element.parentElement;
                if (element.dataset.type !== 'swipe-component')
                    element = element.parentElement;
            }

            switch (type) {
                case 'tap':
                    this.tap(element, ev.target.dataset.type);
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


        hammerRight.on('tap swipeup swipedown swiperight swipeleft', (ev) => {
            const type = ev.type;
            let element = ev.target;

            // Find swipe element if event is invoke on child element
            if (element.dataset.type !== 'swipe-component') {
                element = element.parentElement;
                if (element.dataset.type !== 'swipe-component')
                    element = element.parentElement;
            }
            switch (type) {
                case 'tap':
                    this.tap(element, ev.target.dataset.type);
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


        hammerLeft.on('tap swipeup swipedown swiperight swipeleft', (ev) => {
            const type = ev.type;
            let element = ev.target;

            // Find swipe element if event is invoke on child element
            if (element.dataset.type !== 'swipe-component') {
                element = element.parentElement;
                if (element.dataset.type !== 'swipe-component')
                    element = element.parentElement;
            }
            switch (type) {
                case 'tap':
                    this.tap(element, ev.target.dataset.type);
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

        hammerDown.on('tap swipeup swipedown swiperight swipeleft', (ev) => {
            const type = ev.type;
            let element = ev.target;

            // Find swipe element if event is invoke on child element
            if (element.dataset.type !== 'swipe-component') {
                element = element.parentElement;
                if (element.dataset.type !== 'swipe-component')
                    element = element.parentElement;
            }
            switch (type) {
                case 'tap':
                    tap(element, ev.target.dataset.type);
                    break;
                case 'swipeup':
                    x();
                    break;
                case 'swiperight':
                    _z();
                    break;
                case 'swipedown':
                    _x();
                    break;
                case 'swipeleft':
                    z();
                    break;
            }
        });

        this.cubeComponentEl.addEventListener('keydown', this.handleKeyEvent.bind(this), false);
        this.updateUiFaces();
        this.updateAppInfo();
        cubeEl.addEventListener('transitionend', this.transitionEnd.bind(this));
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

    tap(element, target) {
        qs(`.${target}.face`, element).classList.toggle('tapped');
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
            case KEY.w:
                this.x();
                break;
            case KEY.RIGHT:
            case KEY.d:
                this.y();
                break;
            case KEY.DOWN:
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