import User from "@/models/User";
import store from ".";

const getters = {
    userId(): number | null {
        return store.state.user.id;
    },
    isAuthenticated(): boolean {
        return store.state.user.isAuthenticated;
    },
    getUser(): User {
        return store.state.user;
    }
}

export default getters;