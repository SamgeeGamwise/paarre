import { defineComponent } from 'vue';
import Footer from '../_components/Footer/Footer.vue';

const friendsMobile = '/images/tall-friends.jpg';
const friends = '/images/friends3.jpg';

export default defineComponent({
    name: 'Landing',
    components: {
        Footer,
    },
    data() {
        return {
            constants: {
                FRIENDS_MOBILE: friendsMobile,
                FRIENDS: friends,
            },
        };
    },
    mounted() { },
    methods: {

    },
});