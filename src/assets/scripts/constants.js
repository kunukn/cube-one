import deepFreeze from 'deep-freeze';

const STATES = {
    uf: 'uf',
    ur: 'ur',
    ub: 'ub',
    ul: 'ul',
    fu: 'fu',
    fl: 'fl',
    fd: 'fd',
    fr: 'fr',
    ru: 'ru',
    rf: 'rf',
    rd: 'rd',
    rb: 'rb',
    df: 'df',
    dl: 'dl',
    db: 'db',
    dr: 'dr',
    bu: 'bu',
    br: 'br',
    bd: 'bd',
    bl: 'bl',
    lu: 'lu',
    lb: 'lb',
    ld: 'ld',
    lf: 'lf',
};
deepFreeze(STATES);


const STATES_ARRAY = [];
Object.keys(STATES).forEach((state, index) => STATES_ARRAY.push(state));
deepFreeze(STATES_ARRAY);

const opposite = [];
opposite['u'] = 'd';
opposite['d'] = 'u';
opposite['r'] = 'l';
opposite['l'] = 'r';
opposite['f'] = 'b';
opposite['b'] = 'f';

const left = [];
left['uf'] = 'l';
left['ur'] = 'f';
left['ub'] = 'r';
left['ul'] = 'b';

left['fu'] = 'r';
left['fl'] = 'u';
left['fd'] = 'l';
left['fr'] = 'd';

left['ru'] = 'b';
left['rf'] = 'u';
left['rd'] = 'f';
left['rb'] = 'd';

left['df'] = 'r';
left['dl'] = 'f';
left['db'] = 'l';
left['dr'] = 'b';

left['bu'] = 'l';
left['br'] = 'u';
left['bd'] = 'r';
left['bl'] = 'd';

left['lu'] = 'f';
left['lb'] = 'u';
left['ld'] = 'b';
left['lf'] = 'd';


export { STATES, STATES_ARRAY, opposite, left };