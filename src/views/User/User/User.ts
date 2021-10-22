import { Ref, ref, onMounted } from 'vue'
import { Store, useStore } from 'vuex'
import State from '@/store/state'
import { getDistance, getLocation } from "@/services/geolocation/index"
import Account from '@/models/Account'

export default {
    setup() {
        const store: Store<State> = useStore()
        const account: Ref<Account> = ref({ ...store.getters.getAccount })
        const password: Ref<string> = ref("")
        const passwordConfirm: Ref<string> = ref("")

        const updateUsers = (e: Event) => {
            e.preventDefault()
            store.commit("setLoading", true)
            store.dispatch("updateAccount", {
                endpoint: "/users",
                email: account.value.email,
                user1: account.value.user1,
                user2: account.value.user2
            })
            store.commit("setLoading", false)
        }

        const updatePassword = (e: Event) => {
            e.preventDefault()
            store.commit("setLoading", false)

            if (password.value === passwordConfirm.value) {
                store.dispatch("updateAccount", { endpoint: "/password", password: password.value })
                password.value = ""
                passwordConfirm.value = ""
            }
            store.commit("setLoading", false)
        }


        onMounted(async () => {
            // Google Maps API
            getLocation().then((position: GeolocationPosition) => {
                console.log(position)
            }).catch((err) => {
                console.log(err)
            })
        })

        return {
            account, password, passwordConfirm, updateUsers, updatePassword
        }
    }
}
