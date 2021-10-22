import router from '@/router'
import State from '@/store/state'
import { Ref, ref } from 'vue'
import { Store, useStore } from 'vuex'
import Account from '@/models/Account'
import { LoginPayload } from '@/typescript/types'


export default {
    setup(props: any, { expose }: any) {
        const store: Store<State> = useStore()
        const email: Ref<string> = ref("")
        const password: Ref<string> = ref("")
        const submit: Ref<boolean> = ref(false)

        const login = (e: Event): void => {
            e.preventDefault()
            store.commit("setLoading", true)
            submit.value = true
            const payload: LoginPayload = { email: email.value, password: password.value }
            store.dispatch('login', payload).then((account: Account) => {
                store.commit("setLoading", false)
                if (account) {
                    router.push('/')
                }
            }).catch(err => {
                console.log(err)
            })
        }

        return { email, password, submit, login }
    }
}
