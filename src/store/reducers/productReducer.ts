export const prouctReducer = (state = {selectedProducts: []}, action: {type: string, payload: []}) => {
    switch(action.type) {
        case "GET_PRODUCTS":
            return {selectedProducts: action.payload};
        default:
            return state;
    }
    
}
