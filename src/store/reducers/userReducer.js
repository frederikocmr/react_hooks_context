const userReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.payload
        case 'EDIT_USER':
            return { ...state, ...action.payload } 
        default:
            return state;
    };
}

export default userReducer;