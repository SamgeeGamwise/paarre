import Account from '@/models/Account';
import User from '@/models/User';
import { RegisterPayload } from '@/typescript/types';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Register',
    data() {
        return {
            email: "",
            password: "",
            passwordConfirm: "",
            firstName1: "",
            lastName1: "",
            firstName2: "",
            lastName2: "",
            submit: false,
            showFirst: false,
            showSecond: false,
        }
    },
    methods: {
        register(e: Event) {
            this.$store.commit("setLoading", true);
            e.preventDefault();
            this.submit = true;
            if (this.password === this.passwordConfirm) {
                const payload: RegisterPayload = {
                    email: this.email,
                    password: this.password,
                    firstName1: this.firstName1,
                    lastName1: this.lastName1,
                    firstName2: this.firstName2,
                    lastName2: this.lastName2
                }
                this.$store.dispatch('register', payload).then((account: Account) => {
                    this.email = "";
                    this.password = "";
                    this.firstName1 = "";
                    this.lastName1 = "";
                    this.firstName2 = "";
                    this.lastName2 = "";
                    this.$store.commit("setLoading", false);
                    if (account) this.$router.push('/');
                })
            }
        },
        show(e: Event) {
            e.preventDefault()
            if (this.email !== "" && this.password !== "" && this.passwordConfirm !== "") {
                !this.showFirst ? this.showFirst = true : this.showSecond = true
            }
        }
    },
});