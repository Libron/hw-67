const initialState = {
    code: '',
    isLocked: true
};

const passcode ='1234';

const reducer = (state = initialState, action) => {
    if (action.type === 'REMOVE_SYMBOL') {
        return {
            ...state,
            isLocked: true,
            code: state.code.substr(0, state.code.length -1)
        };
    }

    if (action.type === 'CHECK_PASSCODE') {
        if (passcode === state.code) {
           return {
               ...state,
               isLocked: false
           }
        }
    }

    if (state.code.length < 4 && action.type === 'ADD_SYMBOL') {
        return {
            ...state,
            code: state.code + action.symbol
        };
    } else {
        return state;
    }
};

export default reducer;