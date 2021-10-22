import { Ref, ref, computed } from 'vue'
import State from '@/store/state'
import { Store, useStore } from 'vuex'
import { Router, useRouter, useRoute, } from 'vue-router'
import Account from '@/models/Account'

export default {
    setup() {
        const store: Store<State> = useStore()
        const router: Router = useRouter()
        const account: Ref<Account> = ref(store.getters.getAccount)
        const isAuthenticated: Ref<boolean> = computed(() => store.getters.isAuthenticated)

        const logout = async () => {
            await store.dispatch('logout')
            router.push({ name: 'Landing' })
        }


        return { store, account, logout, isAuthenticated }
    }
}