import { createStore } from 'vuex';
import { RootState } from '../types';


// Create a new store instance.
const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state: RootState) {
            state.count++
        }
    }
})

export default store;