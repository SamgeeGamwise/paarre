import { defineComponent } from 'vue'
import Account from '@/models/Account'
import ProfileCard from "@/views/_components/ProfileCard/ProfileCard.vue"

export default defineComponent({
    name: 'Home',
    components: {
        ProfileCard
    },
    data() {
        return {
            account: this.$store.getters.getAccount,
            users: [],
            activeProfile: new Account() as Account,
            loaded: false
        }
    },
    mounted: async function () {
        this.users = await this.$store.dispatch("getCouples")
        this.loaded = true
    },
    computed: {

    },
    methods: {
        setProfile(user: Account): void {
            this.activeProfile = user
        },
    },
})