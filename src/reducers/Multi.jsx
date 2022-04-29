const initialState = 5;
const MultiDiv = (state = initialState , action)=>{

    switch(action.type){
        case "DIVIDE" : return state / action.payload;
        case "MULTI" : return state * action.payload;
        default:return state;
    }
}

export default MultiDiv;