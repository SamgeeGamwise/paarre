import store from "@/store";
import State from "@/store/state";
import User from "@/models/User";

const mutations = {
    authenticate(state: State, status: boolean) {
        store.state.user.isAuthenticated = status;
    },
    clearUser() {
        store.state.user = new User();
    },
    updateUser(state: State, newUser: User) {
        store.state.user = newUser;
    }
}

export default mutations;