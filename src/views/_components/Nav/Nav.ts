import { defineComponent } from 'vue';
const logo = "/images/Paarre-v4.png";

export default defineComponent({
    name: 'Nav',
    data() {
        return {
            constants: {
                LOGO: logo,
            },
            user: this.$store.getters.getUser,
        }
    },
    methods: {
        logout() {
            this.$store.commit('clearUser');
            localStorage.removeItem('jwt');
            this.$router.push({ name: 'Landing' });
        },
    },
    computed: {
        isAuthenticated(): boolean {
            return this.$store.getters.getUser.isAuthenticated;
        },
    },
});