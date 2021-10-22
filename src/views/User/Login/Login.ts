import { Router, useRouter } from 'vue-router'
import State from '@/store/state'
import { Ref, ref } from 'vue'
import { Store, useStore } from 'vuex'
import Account from '@/models/Account'
import { LoginType, ErrorMessage } from '@/typescript/types'


export default {
    setup(props: any, { expose }: any) {
        const store: Store<State> = useStore()
        const router: Router = useRouter()
        const form: Ref<LoginType> = ref({
            email: "",
            password: ""
        })
        const error: Ref<ErrorMessage> = ref({ show: false, message: "" })
        const submit: Ref<boolean> = ref(false)

        const login = (e: Event): void => {
            e.preventDefault()
            store.commit("setLoading", true)
            submit.value = true
            const payload: LoginType = { email: form.value.email, password: form.value.password }

            store.dispatch('login', payload).then((account: Account) => {
                store.commit("setLoading", false)
                if (account) {
                    router.push('/')
                } else {
                    throw "Could not log in!"
                }
            }).catch(err => {
                store.commit("setLoading", false)
                error.value.message = err
                error.value.show = true
            })
        }

        return { form, error, submit, login }
    }
}
