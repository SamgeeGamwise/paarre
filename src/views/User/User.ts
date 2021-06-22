import { defineComponent } from 'vue';
import { getDistance, getLocation } from "@/geolocation/index";
import { Coordinates } from '@/typescript/types';

export default defineComponent({
    name: 'User',
    data() {
        return {
            account: { ...this.$store.getters.getAccount },
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
        updateUsers(e: Event) {
            e.preventDefault();
            this.$store.commit("updateUsers", [this.account.user1, this.account.user2]);
        },
        updatePassword(e: Event) {
            e.preventDefault();
            console.log("Update Password!");
        }
    },
});