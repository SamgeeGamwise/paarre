import { defineComponent } from 'vue';
const logo = "/images/Paarre-v4.png";

export default defineComponent({
    name: 'Nav',
    data() {
        return {
            constants: {
                LOGO: logo,
            },
            account: this.$store.getters.getAccount,
        }
    },
    methods: {
        logout() {
            this.$store.commit('clearAccount');
            localStorage.removeItem('jwt');
            this.$router.push({ name: 'Landing' });
        },
    },
    computed: {
        isAuthenticated(): boolean {
            return this.$store.getters.getAccount.isAuthenticated;
        },
    },
});