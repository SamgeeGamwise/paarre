import store from "@/store/"
import Account from "@/models/Account"

const getters = {
    accountId(): number {
        return store.state.account.id
    },
    isAuthenticated(): boolean {
        return store.state.isAuthenticated
    },
    isAdmin(): boolean {
        return store.state.account.isAdmin
    },
    isLoading(): boolean {
        return store.state.isLoading
    },
    getAccount(): Account {
        return store.state.account
    }
}

export default getters