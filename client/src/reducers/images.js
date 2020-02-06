import types from "../actions/types"

const initialState = {
    items: [],
};

export const images = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_IMAGES:
            return {
                ...state,
            };
        case types.LOAD_IMAGES_SUCCESS:
            return {
                ...state,
                items: action.payload
            };
        case types.UPDATE_IMAGE:
            return {
                ...state,
            };
        case types.UPDATE_IMAGE_SUCCESS:
            return {
                ...state,
                items: state.items.map(image => {
                    if(image.id === action.payload.id){
                        return action.payload;
                    }
                    return image;
                })
            };
        default:
            return state
    }
};

