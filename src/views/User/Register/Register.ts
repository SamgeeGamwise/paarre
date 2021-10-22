import Account from '@/models/Account'
import { RegisterType, ErrorMessage } from '@/typescript/types'
import { Router, useRouter } from 'vue-router'
import State from '@/store/state'
import { Ref, ref } from 'vue'
import { Store, useStore } from 'vuex'

export default {
    setup() {
        const router: Router = useRouter()
        const store: Store<State> = useStore()
        const form: Ref<RegisterType> = ref({
            email: "",
            password: "",
            passwordConfirm: "",
            firstName1: "",
            lastName1: "",
            firstName2: "",
            lastName2: "",
        })

        const error: Ref<ErrorMessage> = ref({ show: false, message: "" })
        const submit: Ref<boolean> = ref(false)
        const showFirst: Ref<boolean> = ref(false)
        const showSecond: Ref<boolean> = ref(false)

        const register = (e: Event): void => {
            e.preventDefault()
            error.value.show = false

            if (form.value.password === form.value.passwordConfirm) {
                store.commit("setLoading", true)
                submit.value = true
                const payload: RegisterType = {
                    email: form.value.email,
                    password: form.value.password,
                    firstName1: form.value.firstName1,
                    lastName1: form.value.lastName1,
                    firstName2: form.value.firstName2,
                    lastName2: form.value.lastName2,
                }
                store.dispatch('register', payload).then((account: Account) => {
                    store.commit("setLoading", false)
                    if (account) {
                        router.push('/')
                    } else {
                        throw "Could not register account!"
                    }
                }).catch(err => {
                    store.commit("setLoading", false)
                    error.value.message = err
                    error.value.show = true
                })
            } else {
                store.commit("setLoading", false)
            }
        }

        return {
            form,
            submit,
            showFirst,
            showSecond,
            error,
            register
        }
    }
}