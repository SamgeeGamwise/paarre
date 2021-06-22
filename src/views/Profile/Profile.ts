import { defineComponent } from 'vue';
import { getDistance, getLocation } from "@/geolocation/index";
import { Coordinates } from '@/typescript/types';

export default defineComponent({
    name: 'Profile',
    data() {
        return {
            user: { ...this.$store.getters.getUser },
            userForm: { ...this.$store.getters.getUser },
        }
    },
    mounted: () => {

        // Google Maps API
        // getLocation().then((position: GeolocationPosition) => {
        //     console.log(position);
        // }).catch((err) => {
        //     console.log(err)
        // })
    },
    methods: {
        updateUser(e: Event) {
            e.preventDefault();
            this.$store.commit("updateUser", this.userForm);
            this.user = { ... this.$store.getters.getUser };
        },
    },
});