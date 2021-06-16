import { createStore } from 'vuex';
import { RootState } from "@/typescript/types";

// Create a new store instance.
const store = createStore({
    state(): RootState {
        return {
            user: {
                isAuthenticated: false,
                id: 0,
                firstName: "",
                lastName: "",
                email: "",
            }
        }

    },
    mutations: {
        authenticated() {
            store.state.user.isAuthenticated = !store.state.user.isAuthenticated;
            console.log(store.state.user.isAuthenticated)
        }
    }
})

export default store;