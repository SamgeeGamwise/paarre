import { defineComponent } from 'vue';
import users from "@/database/users";
import Account from '@/models/Account';

export default defineComponent({
    name: 'Home',
    data() {
        return {
            account: this.$store.getters.getAccount,
            users: [...users],
            activeProfile: new Account() as Account
        }
    },
    computed: {

    },
    methods: {
        setProfile(user: Account): void {
            this.activeProfile = user
        },
    },
});