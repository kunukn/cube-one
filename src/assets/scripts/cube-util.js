import { opposite, left, STATES_ARRAY } from './constants';
import { log } from './logger';

export function getUp(stateCode) {
    return stateCode[0];
}

export function getFront(stateCode) {
    return stateCode[1];
}

export function getRight(stateCode) {
    return opposite[getLeft(stateCode)];
}

export function getLeft(stateCode) {
    return left[stateCode];
}

export function getDown(stateCode) {
    return opposite[stateCode[0]];
}

export function getBack(stateCode) {
    return opposite[stateCode[1]];
}

export function cloneObject(obj) {
    return Object.assign({}, obj);
}

function NextState() {

    const S = STATES_ARRAY;
    this.first = STATES_ARRAY[0];
    this.last = STATES_ARRAY[STATES_ARRAY.length - 1];

    this.stateCount = S.length;

    this.get = function(state) {
        let index = S.indexOf(state);
        if (index >= 0) {
            if (index === S.length - 1) {
                return { state: S[0], index: 0 };
            }
            return {
                state: S[index + 1],
                index: index + 1
            };
        }
        return undefined;
    }
}
const nextState = new NextState();
export { nextState };