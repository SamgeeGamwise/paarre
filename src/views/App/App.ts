import { Ref, computed } from 'vue'
import { Store, useStore } from 'vuex'
import { useRoute, RouteLocationNormalizedLoaded, } from 'vue-router'
import State from '@/store/state'
import Nav from '@/views/_components/Nav/Nav.vue'
import Footer from '@/views/_components/Footer/Footer.vue'

export default {
    components: {
        Nav,
        Footer,
    },
    setup() {
        const store: Store<State> = useStore()
        const route: RouteLocationNormalizedLoaded = useRoute()
        const isLoading: boolean = store.getters.isLoading
        const isLanding: Ref<boolean> = computed(() => route.name === "Landing")

        return { isLoading, isLanding }
    }
}
