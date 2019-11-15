export const ADD_SLIDE = "ADD_SLIDE";
export const REMOVE_SLIDE = "REMOVE_SLIDE";
export const NEXT_SLIDE = 'NEXT_SLIDE';
export const PREVIOUS_SLIDE = 'PREVIOUS_SLIDE';
export const SET_SLIDE = 'SET_SLIDE';
export const SET_MODE = 'SET_MODE';

export function addSlide(payload, pos) {
    return {
        type: ADD_SLIDE,
        payload,
        pos};
}

export function removeSlide(payload, external = false) {
    return { type: REMOVE_SLIDE, payload, external};
}

export function nextSlide(payload, external = false) {
    return { type: NEXT_SLIDE, payload, external };
}

export function prevSlide(payload, external = false) {
    return { type: PREVIOUS_SLIDE, payload, external };
}

export function setSlide(index, external = false) {
    return { type: SET_SLIDE, index, external };
}

export function setMode(mode) {
    return { type: SET_MODE, mode}
}
