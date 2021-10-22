import { defineComponent } from 'vue'
import { getDistance, getLocation } from "@/services/geolocation/index"
import { Coordinates } from '@/typescript/types'

export default defineComponent({
    name: 'User',
    data() {
        return {
            account: { ...this.$store.getters.getAccount },
            password: "",
            passwordConfirm: ""
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
            this.$store.commit("setLoading", true)
            e.preventDefault()
            this.$store.dispatch("updateAccount", { endpoint: "users", email: this.account.email, user1: this.account.user1, user2: this.account.user2 })
            this.$store.commit("setLoading", false)
        },
        updatePassword(e: Event) {
            this.$store.commit("setLoading", false)
            e.preventDefault()
            if (this.password === this.passwordConfirm) {
                this.$store.dispatch("updateAccount", { endpoint: "password", password: this.password })
                this.password = ""
                this.passwordConfirm = ""
            }
            this.$store.commit("setLoading", false)
        }
    },
})