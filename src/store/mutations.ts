import store from "@/store";
import State from "@/store/state";
import Account from "@/models/Account";
import Profile from "@/models/Profile";
import User from "@/models/User";

const mutations = {
    authenticate(state: State, status: boolean) {
        store.state.account.isAuthenticated = status;
        localStorage.setItem('jwt', JSON.stringify(store.state.account));
    },
    clearAccount() {
        store.state.account = new Account();
    },
    updateProfile(state: State, profile: Profile) {
        store.state.account.profile = profile;
        localStorage.setItem('jwt', JSON.stringify(store.state.account));
    },
    updateUsers(state: State, users: User[]) {
        store.state.account.user1 = users[0];
        store.state.account.user2 = users[1];
        localStorage.setItem('jwt', JSON.stringify(store.state.account));
    },
    setAccount(state: State, account: Account) {
        store.state.account = account;
    }
}

export default mutations;