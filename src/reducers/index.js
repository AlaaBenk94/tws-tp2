import {
    ADD_DRAW_POINTS,
    ADD_SLIDE,
    REMOVE_SLIDE,
    RESET_DRAW_POINTS,
    SET_MODE,
    SET_SLIDE,
    TOGGLE_NOTES
} from "../actions";
import {PRESENT} from "../index";

const initialState = {
    mode: PRESENT,
    showNotes: false,
    index: 1,
    slides: [
        {type: 'title', title: 'TIW 8', visible: true, notes: "note 1"},
        {type: 'content', title: 'TP 1', text: "Le TP porte sur des rappels de developpement Web", visible: false, notes: "ce transparent est caché"},
        {type: 'content', title: 'TP 2', text: "Le TP porte sur la creation d'un outil de presentation HTML", visible: true, image: 'https://www.jesuisundev.com/wp-content/uploads/2019/07/javascript_everywhere.jpg', notes: ""},
        {type: 'content', title: 'TP 3', text: "Le TP 3", visible: true, image: 'https://i.pinimg.com/736x/64/e8/48/64e84853aaa2a974fc88b1a4c614a7f2.jpg',notes: "note 4"},
        {type: 'content', title: 'JavaScript everywhere', text: "Le TP 4", visible: true, image: 'https://img.devrant.com/devrant/rant/r_1413973_eX38n.jpg', notes: "note 5"},
        {type: 'title', title: 'Question ?', visible: true, notes: "note 6"},
    ],
    drawing: {
        clickX: [],
        clickY: [],
        clickDrag: []
    }
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SLIDE: {
            console.log("add slide");
            let newSlides = [...state.slides];
            newSlides.splice(action.pos, 0, action.payload);
            return {
                ...state,
                slides: newSlides
            };
        }
        case REMOVE_SLIDE: {
            console.log("remove slide");
            let newSlides = [...state.slides];
            newSlides.splice(action.pos, 1);
            return {
                ...state,
                slides: newSlides
            };
        }
        case SET_SLIDE:
            console.log("set Slide");
            return {
                ...state,
                index: (action.index > state.slides.length) ? state.slides.length : (action.index < 1 ? 1 : action.index),
                drawing: {
                    clickX: [],
                    clickY: [],
                    clickDrag: []
                }
            };
        case SET_MODE:
            console.log("set Mode");
            return {
                ...state,
                mode: action.mode
            };
        case ADD_DRAW_POINTS:
            console.log("add draw points");
            console.log(JSON.stringify(state.drawing.clickX.length));
            let newClickX = [...state.drawing.clickX],
                newClickY = [...state.drawing.clickY],
                newClickDrag = [...state.drawing.clickDrag];
            newClickX.push(...action.clickX);
            newClickY.push(...action.clickY);
            newClickDrag.push(...action.clickDrag);
            return {
                ...state,
                drawing: {
                    clickX: newClickX,
                    clickY: newClickY,
                    clickDrag: newClickDrag
                }
            };
        case RESET_DRAW_POINTS:
            console.log("reset draw points");
            return {
                ...state,
                drawing: {
                    clickX: [],
                    clickY: [],
                    clickDrag: []
                }
            };
        case TOGGLE_NOTES:
            console.log("reset draw points");
            return {
                ...state,
                showNotes: !state.showNotes
            };
        default:
            return state
    }
}

export default rootReducer;
