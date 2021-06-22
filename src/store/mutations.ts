import store from "@/store";
import State from "@/store/state";
import Account from "@/models/Account";
import Profile from "@/models/Profile";
import User from "@/models/User";

const mutations = {
    authenticate(state: State, status: boolean) {
        store.state.account.isAuthenticated = status;
    },
    clearAccount() {
        store.state.account = new Account();
    },
    updateProfile(state: State, profile: Profile) {
        store.state.account.profile = profile;
    },
    updateUsers(state: State, users: User[]) {
        store.state.account.user1 = users[0];
        store.state.account.user2 = users[1];
    },
}

export default mutations;