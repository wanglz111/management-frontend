const numStatus: NumStatus= {
    state: {
        num: 0
    },
    actions: {
        add(newState: { num: number }, action: { val: number | undefined, type: string }) {
            newState.num += action.val ? action.val : 1;
        },
        sub(newState: { num: number }, _action: { val: number | undefined, type: string }) {
            newState.num--;
        }
    },
    actionNames: {}
}

for (let key in numStatus.actions) {
    numStatus.actionNames[key] = key;
}

interface NumStatus {
    state: {
        num: number
    },
    actions: {
        [key: string]: (newState: { num: number }, action: { val: number | undefined, type: string }) => void
    },
    actionNames: {
        [key: string]: string
    }
}

export default numStatus;
