import { Ref, ref, onMounted } from 'vue'
import { Store, useStore } from 'vuex'
import State from '@/store/state'
import Account from '@/models/Account'
import ProfileCard from "@/views/_components/ProfileCard/ProfileCard.vue"

export default {
    components: {
        ProfileCard
    },
    setup() {

        const store: Store<State> = useStore()
        const account: Ref<Account> = store.getters.getAccount
        const users: Ref<Account[]> = ref([])
        const activeProfile: Ref<Account> = ref(new Account())
        const loaded: Ref<boolean> = ref(false)
        console.log(store)
        const setProfile = (user: Account): void => {
            activeProfile.value = user
        }

        onMounted(async () => {
            users.value = await store.dispatch("getCouples")
            loaded.value = true
        })

        return {
            account, users, activeProfile, loaded, setProfile
        }
    }
}