import {ADD_SLIDE, NEXT_SLIDE, PREVIOUS_SLIDE, REMOVE_SLIDE} from "../actions";

const initialState = {
    index: 1,
    slides: [
        {type: 'title', title: 'TIW 8', visible: true, notes: "note 1"},
        {type: 'content', title: 'TP 1', text: "Le TP porte sur des rappels de developpement Web", visible: false, notes: "ce transparent est caché"},
        {type: 'content', title: 'TP 2', text: "Le TP porte sur la creation d'un outil de presentation HTML", visible: true, notes: ""},
        {type: 'content', title: 'TP 3', text: "Le TP 3", visible: true, notes: "note 4"},
        {type: 'content', title: 'TP 4', text: "Le TP 4", visible: true, notes: "note 5"},
        {type: 'title', title: 'Question ?', visible: true, notes: "note 6"},
    ]
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SLIDE:
            console.log(`add slide ${action.payload}`);
            state.slides.push(action.payload);
            break;
        case REMOVE_SLIDE:
            console.log("remove slide");
            break;
        case NEXT_SLIDE:
            console.log("next slide");
            state.index = state.index >= state.slides.length ? state.slides.length : (state.index + 1);
            break;
        case PREVIOUS_SLIDE:
            console.log("Previous Slide");
            state.index = state.index <= 1 ? 1 : (state.index - 1);
            break;
        default:
            return state
    }
    return state;
};

export default rootReducer;
