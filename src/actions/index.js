export const ADD_SLIDE = "ADD_SLIDE";
export const REMOVE_SLIDE = "REMOVE_SLIDE";
export const SET_SLIDE = 'SET_SLIDE';
export const SET_MODE = 'SET_MODE';
export const ADD_DRAW_POINTS = 'ADD_DRAW_POINTS';
export const RESET_DRAW_POINTS = 'RESET_DRAW_POINTS';


export function addSlide(payload, pos) {
    return {
        type: ADD_SLIDE,
        payload,
        pos};
}

export function removeSlide(payload, external = false) {
    return { type: REMOVE_SLIDE, payload, external};
}

export function setSlide(index, external = false) {
    return { type: SET_SLIDE, index, external };
}

export function setMode(mode, external = false) {
    return { type: SET_MODE, mode, external}
}

export function addDrawPoints(clickX, clickY, clickDrag, external = false) {
    return { type: ADD_DRAW_POINTS, clickX, clickY, clickDrag, external}
}

export function resetDrawPoints(external = false) {
    return { type: RESET_DRAW_POINTS, external}
}
