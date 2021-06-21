import User from '@/models/User';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Register',
    methods: {
        register() {
            this.$store.dispatch('login').then((user: User) => {
                if (user) this.$router.push('/');
            })
        },
    },
});