import { defineComponent } from 'vue';
import Nav from '@/views/_components/Nav/Nav.vue';
import Footer from '@/views/_components/Footer/Footer.vue';

export default defineComponent({
    name: 'App',
    components: {
        Nav,
        Footer,
    },
    computed: {
        isAuthenticated(): boolean {
            return this.$store.state.user.isAuthenticated;
        },
    },
});