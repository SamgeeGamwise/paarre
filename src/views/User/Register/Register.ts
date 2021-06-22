import Account from '@/models/Account';
import User from '@/models/User';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Register',
    methods: {
        register() {
            this.$store.dispatch('login').then((account: Account) => {
                if (account) this.$router.push('/');
            })
        },
    },
});