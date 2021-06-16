import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
    methods: {
        logout() {
            this.$store.commit('authenticated');
            localStorage.removeItem('jwt');
            this.$router.push({ name: 'Landing' });
        },
    },
});