import { createStore, Store } from 'vuex';
import mutations from './mutations';
import actions from './actions';
import State from './state';
import getters from './getters'

// Create a new store instance.
const store: Store<State> = createStore({
    state: new State(),
    actions: actions,
    mutations: mutations,
    getters: getters
})

export default store;