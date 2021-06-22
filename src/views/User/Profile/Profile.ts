import { defineComponent } from 'vue';
import SearchAddRemove from "@/views/_components/SearchAddRemove/SearchAddRemove.vue"
import Passions from '@/models/Passions';
import Account from '@/models/Account';
import { getDistance, getLocation } from "@/geolocation/index";

export default defineComponent({
    name: 'Profile',
    data() {
        return {
            account: { ...this.$store.getters.getAccount } as Account,
            passions: Passions.allPassions()
        }
    },
    components: {
        SearchAddRemove
    },
    mounted() {
        this.passions.sports = this.passions.sports.filter((passion) => {
            return !this.account.profile.passions.sports.includes(passion);
        })

        // Google Maps API
        // getLocation().then((position: GeolocationPosition) => {
        //     console.log(position);
        // }).catch((err) => {
        //     console.log(err)
        // })
    },
    methods: {
        updateProfile(e: Event) {
            e.preventDefault();
            this.$store.commit("updateProfile", this.account.profile);
        },
    },
});