import {ADD_DRAW_POINTS, ADD_SLIDE, REMOVE_SLIDE, RESET_DRAW_POINTS, SET_SLIDE} from "../actions";

export const socketClient = require('socket.io-client')();

export const logger = store => next => action => {
    console.log('dispatching ', action);
    let result = next(action);
    console.log('after dispatching ', store.getState());
    return result;
};

export const socketConnect = store => next => action => {
    if ((action.type === SET_SLIDE
        || action.type === ADD_DRAW_POINTS
        || action.type === RESET_DRAW_POINTS
        || action.type === ADD_SLIDE
        || action.type === REMOVE_SLIDE)
        && !action.external) {
        console.log(`sending ${action}`);
        socketClient.emit(action.type, action);
    }
    return next(action);
}
