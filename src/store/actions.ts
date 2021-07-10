import { Commit } from "vuex";
import { AuthServerResponse, LoginPayload } from "../typescript/types"
import axios from 'axios';

const api: string = "http://localhost:3000";

const actions = {
    login({ commit }: { commit: Commit }, payload: LoginPayload) {
        return new Promise((resolve, reject) => {
            axios(api + "/api/account/login", { method: "POST", data: payload, withCredentials: true }).then((res: AuthServerResponse) => {
                const account = res.data.data
                console.log(account);

                commit("authenticate", account);
                resolve(account)
            }, (error: any) => {
                reject(error)
            })
        });
    },
    getUser({ commit }: { commit: Commit }) {
        return new Promise((resolve, reject) => {
            axios.get(api + "/api/account", { withCredentials: true }).then((res: AuthServerResponse) => {
                const account = res.data.data
                console.log(account);

                commit("authenticate", account);
                resolve(account)
            }, (error: any) => {
                reject(error)
            })
        });
    },
    logout({ commit }: { commit: Commit }) {
        return new Promise((resolve, reject) => {
            axios(api + "/api/account/logout", { method: "POST", withCredentials: true }).then(() => {
                commit("clearAccount");
                resolve(true)
            }, (error: any) => {
                reject(error)
            })
        });
    },
    saveAccount({ commit }: { commit: Commit }) {

    },
}

export default actions;