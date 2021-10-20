import Account from '@/models/Account';
import { LoginPayload } from '@/typescript/types';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Login',
    data() {
        return {
            email: "",
            password: "",
            submit: false,
        }
    },
    methods: {
        login(e: Event) {
            this.$store.commit("setLoading", true);
            e.preventDefault();
            this.submit = true;
            const payload: LoginPayload = { email: this.email, password: this.password }
            this.$store.dispatch('login', payload).then((account: Account) => {
                this.$store.commit("setLoading", false);
                if (account) this.$router.push('/');
            })
        },
    },
});