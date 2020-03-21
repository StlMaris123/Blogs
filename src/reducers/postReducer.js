exportDefault (state = [], action ) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            retrun action.payload;
        default:
            return state;
    }
};