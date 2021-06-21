import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
    methods: {
        logout() {
            this.$store.commit('clearUser');
            localStorage.removeItem('jwt');
            this.$router.push({ name: 'Landing' });
        },
    },
});