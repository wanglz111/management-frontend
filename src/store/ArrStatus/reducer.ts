import ArrStatus from "./index";

let reducer = (state = {...ArrStatus.state}, action: { type: string, val: number }) => {
    let newState = JSON.parse(JSON.stringify(state));

    ArrStatus.actionNames[action.type] && ArrStatus.actions[ArrStatus.actionNames[action.type]](newState, action);
    return newState;
}

export default reducer;