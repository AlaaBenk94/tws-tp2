export const ADD_SLIDE = "ADD_SLIDE";
export const REMOVE_SLIDE = "REMOVE_SLIDE";
export const NEXT_SLIDE = 'NEXT_SLIDE';
export const PREVIOUS_SLIDE = 'PREVIOUS_SLIDE';

export function addSlide(payload) {
    return { type: ADD_SLIDE, payload };
}

export function removeSlide(payload) {
    return { type: REMOVE_SLIDE, payload };
}

export function nextSlide(payload) {
    return { type: NEXT_SLIDE, payload };
}

export function prevSlide(payload) {
    return { type: PREVIOUS_SLIDE, payload };
}
