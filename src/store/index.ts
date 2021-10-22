import { createStore, Store } from 'vuex'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import State from '@/store/state'
import getters from '@/store/getters'

// Create a new store instance.
const store: Store<State> = createStore({
    state: new State(),
    actions: actions,
    mutations: mutations,
    getters: getters
})

export default store