import { Commit } from "vuex";
import store from ".";
import { AuthServerResponse } from "../typescript/types"

const axios = require('axios').default;
const api: string = "http://localhost:3000";

const actions = {
    login({ commit }: { commit: Commit }) {
        return new Promise((resolve, reject) => {
            axios.get(api + "/api/user/auth", { params: { id: store.getters.accountId } }).then((res: AuthServerResponse) => {
                // localStorage.setItem('jwt', JSON.stringify(res.data));

                commit("authenticate", res.data);
                resolve(res.data || false)
            }, (error: any) => {
                reject(error)
            })
        });
    },
    saveAccount({ commit }: { commit: Commit }) {

    },
}

export default actions;