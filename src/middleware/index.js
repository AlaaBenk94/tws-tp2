import {SET_SLIDE} from "../actions";
export const socketClient = require('socket.io-client')();

export const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    return result;
};

export const socketConnect = store => next => action => {
    if (action.type === SET_SLIDE && !action.external) {
        console.log(`sending action ${JSON.stringify(action)}`);
        socketClient.emit('set_slide', action);
    }
    return next(action);
}
