const initialState = {
    userName: null,
    password: null,
    authenticated: false
};

function rootReducer(state=initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            let new_dict = {
                ...state
            }
            new_dict.userName = action.payload.userName
            new_dict.password = action.payload.password
            new_dict.authenticated = true
            return new_dict

        default:
            return state;
    };
}

export default rootReducer