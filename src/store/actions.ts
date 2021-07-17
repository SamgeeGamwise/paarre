import { Commit, Dispatch } from "vuex";
import { AuthServerResponse, LoginPayload, RegisterPayload, UpdateAccount } from "../typescript/types"
import axios from 'axios';

const api: string = "http://localhost:3000";

function err(reject: any) {
    return (error: any) => {
        reject(error)
    }
}

const actions = {
    // GET
    getAccount({ commit }: { commit: Commit }) {
        return new Promise((resolve, reject) => {
            axios.get(api + "/api/account", { withCredentials: true }).then((res: AuthServerResponse) => {
                const account = res.data.data
                commit("setAccount", account);
                resolve(account)
            }), err(reject)
        });
    },
    getCouples({ commit }: { commit: Commit }) {
        return new Promise((resolve, reject) => {
            axios.get(api + "/api/account/all", { withCredentials: true }).then((res: AuthServerResponse) => {
                const accounts = res.data.data
                resolve(accounts)
            }), err(reject)
        });
    },
    // POST
    login({ commit, dispatch }: { commit: Commit, dispatch: Dispatch }, payload: LoginPayload) {
        return new Promise((resolve, reject) => {
            axios(api + "/api/auth/login", { method: "POST", data: payload, withCredentials: true }).then(() => {
                dispatch("getAccount", { commit });
                resolve(true)
            }), err(reject)
        });
    },
    register({ commit, dispatch }: { commit: Commit, dispatch: Dispatch }, payload: RegisterPayload) {
        return new Promise((resolve, reject) => {
            axios(api + "/api/auth/register", { method: "POST", data: payload, withCredentials: true }).then(() => {
                dispatch("getAccount", { commit });
                resolve(true)
            }), err(reject)
        });
    },
    // PUT
    updateAccount({ commit, dispatch }: { commit: Commit, dispatch: Dispatch }, payload: UpdateAccount) {
        const { endpoint, ...data } = payload
        return new Promise((resolve, reject) => {
            axios(api + "/api/account/" + endpoint, { method: "PUT", data, withCredentials: true }).then(() => {
                dispatch("getAccount", { commit });
                resolve(true)
            }), err(reject)
        });
    },
    // DELETE
    logout({ commit }: { commit: Commit }) {
        return new Promise((resolve, reject) => {
            axios(api + "/api/auth/logout", { method: "DELETE", withCredentials: true }).then(() => {
                commit("clearAccount");
                resolve(true)
            }), err(reject)
        })
    },
}

export default actions;