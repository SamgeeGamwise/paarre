import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Nav',
    methods: {
        logout() {
            this.$store.commit('authenticated');
            localStorage.removeItem('jwt');
            this.$router.push({ name: 'Landing' });
        },
    },
});