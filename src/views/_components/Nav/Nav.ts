import { defineComponent } from 'vue';
const logo = "/images/Paarre-v4.png";

export default defineComponent({
    name: 'Nav',
    data() {
        return {
            constants: {
                LOGO: logo,
            },
        }
    },
    methods: {
        logout() {
            this.$store.commit('clearUser');
            localStorage.removeItem('jwt');
            this.$router.push({ name: 'Landing' });
        },
    },
});