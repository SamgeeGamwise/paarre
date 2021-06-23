import { defineComponent } from 'vue';
import SearchAddRemove from "@/views/_components/SearchAddRemove/SearchAddRemove.vue"
import Interest from '@/models/Interest';
import Account from '@/models/Account';
import { getDistance, getLocation } from "@/geolocation/index";

export default defineComponent({
    name: 'Profile',
    data() {
        return {
            account: { ...this.$store.getters.getAccount } as Account,
        }
    },
    components: {
        SearchAddRemove
    },
    mounted() {
        // Google Maps API
        // getLocation().then((position: GeolocationPosition) => {
        //     console.log(position);
        // }).catch((err) => {
        //     console.log(err)
        // })
    },
    computed: {

    },
    methods: {
        updateProfile(e: Event) {
            e.preventDefault();
            this.$store.commit("updateProfile", this.account.profile);
        },
    },
});