import { Ref, ref, onMounted } from 'vue'
import { Store, useStore } from 'vuex'
import State from '@/store/state'
import SearchAddRemove from "@/views/_components/SearchAddRemove/SearchAddRemove.vue"
import Account from '@/models/Account'
import { getDistance, getLocation } from "@/services/geolocation/index"

export default {
    components: {
        SearchAddRemove
    },
    setup(props: any) {
        onMounted(() => {
            //  Google Maps API
            getLocation().then((position: GeolocationPosition) => {
                console.log(position)
            }).catch((err) => {
                console.log(err)
            })
        })

        const store: Store<State> = useStore()
        const account: Ref<Account> = ref(store.getters.getAccount)

        const updateProfile = (e: Event) => {
            e.preventDefault()
            store.commit("setLoading", true)
            store.dispatch("updateAccount", {
                endpoint: "profile",
                details: account.value.profile.details
            })
            store.commit("setLoading", false)
        }

        const updateInterests = (e: Event) => {
            e.preventDefault()
            store.dispatch("updateAccount", {
                endpoint: "interests",
                interests: account.value.profile.interests
            })
        }

        return {
            account, updateProfile, updateInterests
        }

    }
}