import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
    data() {
        return {
            user: this.$store.getters.getUser,
        }
    },
    methods: {

    },
});