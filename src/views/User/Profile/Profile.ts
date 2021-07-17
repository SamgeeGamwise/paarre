import { defineComponent } from 'vue';
import SearchAddRemove from "@/views/_components/SearchAddRemove/SearchAddRemove.vue"
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
            this.$store.commit("setLoading", true);
            e.preventDefault();
            this.$store.dispatch("updateAccount", { endpoint: "profile", details: this.account.profile.details });
            this.$store.commit("setLoading", false);
        },
        updateInterests(e: Event) {
            e.preventDefault();
            this.$store.dispatch("updateAccount", { endpoint: "interests", interests: this.account.profile.interests });
        },
    },
});