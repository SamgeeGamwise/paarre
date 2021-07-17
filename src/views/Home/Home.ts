import { defineComponent } from 'vue';
import Account from '@/models/Account';

export default defineComponent({
    name: 'Home',
    data() {
        return {
            account: this.$store.getters.getAccount,
            users: [],
            activeProfile: new Account() as Account
        }
    },
    mounted: async function () {
        this.users = await this.$store.dispatch("getCouples")
    },
    computed: {

    },
    methods: {
        setProfile(user: Account): void {
            this.activeProfile = user
        },
    },
});