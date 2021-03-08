import { createStore } from 'redux'

let reduce = (state = { num: 10 }, action) => {
    switch (action.type) {
        case 'add':
            return { num: state.num + action.n };
        case "red":
            return { num: state.num - action.n };

    }
}

export default createStore(reduce);