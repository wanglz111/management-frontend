const arrStatus: IArrStatus = {
    state: {
        arr: [1, 2, 3, 4, 5]
    },
    actions: {
        addArr(state: { arr: number[] }, action: { type: string, val: number }) {
            state.arr.push(action.val);
        },
        subArr(state: { arr: number[] }, action: { type: string, val: number }) {
            state.arr.find((item, index) => {
                if (item === action.val) {
                    state.arr.splice(index, 1);
                    return true;
                }
            }
            )
        },
    },
    actionNames: {}
}

for (let key in arrStatus.actions) {
    arrStatus.actionNames[key] = key;
}

interface IArrStatus {
    actionNames: {
        [key: string]: string
    },
    actions: {
        [key: string]: (state: { arr: number[] }, action: { type: string, val: number }) => void
    },
    state: {
        arr: number[]
    }
};

export default arrStatus;