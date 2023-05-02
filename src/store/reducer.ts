const defaultState = {
    num: 20
}

let reducer = (state = defaultState, action: {type: string, val: number}) => {
    let newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case 'add':
            newState.num+=action.val?action.val:1;
            break;
        case 'sub':
            newState.num--;
            break;
        default:
            break;
    }


    return newState;
}

export default reducer;