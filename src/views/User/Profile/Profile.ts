import { Ref, ref, computed, ComputedRef } from 'vue'
import { Store, useStore } from 'vuex'
import State from '@/store/state'
import Account from '@/models/Account'
import SearchAddRemove from "@/views/_components/SearchAddRemove/SearchAddRemove.vue"
import Interest from '@/models/Interest'


export default {
    components: {
        SearchAddRemove
    },
    setup() {
        const store: Store<State> = useStore()
        const account: ComputedRef<Account> = computed(() => store.getters.getAccount)
        const interests: Ref<Interest[]> = ref(account.value.profile.interests)

        const updateProfile = (e: Event) => {
            e.preventDefault()
            store.commit("setLoading", true)
            store.dispatch("updateAccount", {
                endpoint: "/profile",
                details: account.value.profile.details
            })
            store.commit("setLoading", false)
        }

        const updateInterests = (e: Event) => {
            e.preventDefault()
            store.dispatch("updateAccount", {
                endpoint: "/interests",
                interests: account.value.profile.interests
            })
        }

        return {
            account, interests, updateProfile, updateInterests
        }

    }
}