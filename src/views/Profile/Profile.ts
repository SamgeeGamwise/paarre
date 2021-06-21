import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Profile',
    data() {
        return {
            user: { ...this.$store.getters.getUser },
            userForm: { ...this.$store.getters.getUser },
        }
    },
    methods: {
        updateUser(e: Event) {
            e.preventDefault();
            this.$store.commit("updateUser", this.userForm);
            this.user = { ... this.$store.getters.getUser };
        }
    },
});