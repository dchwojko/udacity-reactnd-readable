const readable = ( state = [], action) => {
    switch (action.type) {
        case 'ABC':
            return [];
        default:
            return state;
    }
}

export default readable;