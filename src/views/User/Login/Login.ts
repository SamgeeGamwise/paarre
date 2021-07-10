import Account from '@/models/Account';
import { LoginPayload } from '@/typescript/types';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Login',
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login(e: Event) {
            console.log("login!")
            e.preventDefault();
            const payload: LoginPayload = { email: this.email, password: this.password }
            this.$store.dispatch('login', payload).then((account: Account) => {
                this.email = "";
                this.password = "";
                if (account) this.$router.push('/');
            })
        },
    },
});