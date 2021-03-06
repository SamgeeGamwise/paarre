import State from "@/store/state"
import Account from "@/models/Account"
import { deleteCookie, getCookie } from "./util"

const mutations = {
    setAccount(state: State, account: Account) {
        state.account.id = account.id
        state.isAuthenticated = true
        state.account.isAdmin = account.isAdmin
        state.account.email = account.email
        state.account.profile = account.profile
        state.account.user1 = account.user1
        state.account.user2 = account.user2
    },
    clearAccount(state: State) {
        deleteCookie("connect.sid", "/", "localhost")
        state.account = new Account()
    },
    setLoading(state: State, bool: boolean) {
        state.isLoading = bool
    }
}


export default mutations