import deepFreeze from 'deep-freeze';

const dictColors = [];

let alpha = 1;

dictColors['u'] = `rgba(255, 255, 255, ${alpha})`; // #fff
dictColors['f'] = `rgba(0, 158, 96, ${alpha})`; // #009E60
dictColors['r'] = `rgba(196, 30, 58, ${alpha})`; // #C41E3A
dictColors['l'] = `rgba(255, 88, 0, ${alpha})`; // #FF5800
dictColors['b'] = `rgba(0, 81, 186, ${alpha})`; // #0051BA
dictColors['d'] = `rgba(255, 213, 0, ${alpha})`; // #FFD500

alpha = .3;

dictColors['u-dark'] = `rgba(255, 255, 255, ${alpha})`; // #fff
dictColors['f-dark'] = `rgba(0, 158, 96, ${alpha})`; // #009E60
dictColors['r-dark'] = `rgba(196, 30, 58, ${alpha})`; // #C41E3A
dictColors['l-dark'] = `rgba(255, 88, 0, ${alpha})`; // #FF5800
dictColors['b-dark'] = `rgba(0, 81, 186, ${alpha})`; // #0051BA
dictColors['d-dark'] = `rgba(255, 213, 0, ${alpha})`; // #FFD500

deepFreeze(dictColors);

export default dictColors;