import Account from '@/models/Account';
import User from '@/models/User';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Login',
    methods: {
        login() {
            this.$store.dispatch('login').then((account: Account) => {
                if (account) this.$router.push('/');
            })
        },
    },
});