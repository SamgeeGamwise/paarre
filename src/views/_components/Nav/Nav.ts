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
    mounted: () => {
        console.log("Nav!");

    },
    methods: {
        async logout() {
            await this.$store.dispatch('logout');
            this.$router.push({ name: 'Landing' });
        },
    },
    computed: {
        isAuthenticated(): boolean {
            return this.$store.getters.isAuthenticated;
        },
    },
});