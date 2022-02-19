import { Reducer } from "react";
const initValue = {value: 0};
const rootReducer = (state = initValue, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1
            };
    }
}

const increamentCrator = () => {
    return {
        type: '',
        payload: data,
    }
}
