import { Commit, Dispatch } from "vuex"
import axios from "../services/axios"
import { AuthServerResponse, LoginType, RegisterType, UpdateAccount } from "@/typescript/types"

function err(reject: any) {
    return (error: any) => {
        reject(error)
    }
}

const actions = {
    // GET
    getAccount({ commit }: { commit: Commit }) {
        return new Promise((resolve, reject) => {
            axios.get("/account", { withCredentials: true }).then((res: AuthServerResponse) => {
                const account = res.data.data
                commit("setAccount", account)
                resolve(account)
            }), err(reject)
        })
    },
    getCouples({ commit }: { commit: Commit }) {
        return new Promise((resolve, reject) => {
            axios.get("/account/all", { withCredentials: true }).then((res: AuthServerResponse) => {
                const accounts = res.data.data
                console.log(accounts)

                resolve(accounts)
            }), err(reject)
        })
    },
    // POST
    login({ commit, dispatch }: { commit: Commit, dispatch: Dispatch }, payload: LoginType) {
        return new Promise((resolve, reject) => {
            axios("/auth/login", { method: "POST", data: payload, withCredentials: true }).then(() => {
                dispatch("getAccount", { commit })
                resolve(true)
            }), err(reject)
        })
    },
    register({ commit, dispatch }: { commit: Commit, dispatch: Dispatch }, payload: RegisterType) {
        return new Promise((resolve, reject) => {
            axios("/auth/register", { method: "POST", data: payload, withCredentials: true }).then(() => {
                dispatch("getAccount", { commit })
                resolve(true)
            }), err(reject)
        })
    },
    // PUT
    updateAccount({ commit, dispatch }: { commit: Commit, dispatch: Dispatch }, payload: UpdateAccount) {
        const { endpoint, ...data } = payload
        return new Promise((resolve, reject) => {
            axios("/account" + endpoint, { method: "PUT", data, withCredentials: true }).then(() => {
                dispatch("getAccount", { commit })
                resolve(true)
            }), err(reject)
        })
    },
    // DELETE
    logout({ commit }: { commit: Commit }) {
        return new Promise((resolve, reject) => {
            axios("/auth/logout", { method: "DELETE", withCredentials: true }).then(() => {
                commit("clearAccount")
                resolve(true)
            }), err(reject)
        })
    },
}

export default actions