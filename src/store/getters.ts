import Account from "@/models/Account";
import User from "@/models/User";
import store from ".";

const getters = {
    accountId(): number | null {
        return store.state.account.id;
    },
    isAuthenticated(): boolean {
        return store.state.account.isAuthenticated;
    },
    getAccount(): Account {
        return store.state.account;
    }
}

export default getters;