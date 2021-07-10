import store from "@/store";
import State from "@/store/state";
import Account from "@/models/Account";
import Profile from "@/models/Profile";
import User from "@/models/User";
import { deleteCookie, getCookie } from "./util";

const mutations = {
    authenticate(state: State, account: any) {
        state.account.id = account.id;
        state.isAuthenticated = true;
        state.account.isAdmin = account.isAdmin;
        state.account.email = account.email;
        state.account.profile = account.profile;
        state.account.user1 = account.user1;
        state.account.user2 = account.user2;
    },
    clearAccount(state: State) {
        deleteCookie("connect.sid", "/", "localhost");
        state.account = new Account();
    },
    updateProfile(state: State, profile: Profile) {
        state.account.profile = profile;
    },
    updateUsers(state: State, users: User[]) {
        state.account.user1 = users[0];
        state.account.user2 = users[1];
    },
    setAccount(state: State, account: Account) {
        state.account.id = account.id;
        state.isAuthenticated = true;
        state.account.isAdmin = account.isAdmin;
        state.account.email = account.email;
        state.account.profile = account.profile;
        state.account.user1 = account.user1;
        state.account.user2 = account.user2;
    }
}


export default mutations;