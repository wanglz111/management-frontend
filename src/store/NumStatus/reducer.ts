import NumStatus from "./index";

let reducer = (state = {
    ...NumStatus.state
}, action: { type: string, val: number }) => {
    let newState = JSON.parse(JSON.stringify(state));
    NumStatus.actionNames[action.type] && NumStatus.actions[NumStatus.actionNames[action.type]](newState, action)
    return newState;
}

export default reducer;