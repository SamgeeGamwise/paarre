import Account from '@/models/Account'
import { defineComponent, PropType } from 'vue'

const logo = "@/images/people.png"

export default defineComponent({
    name: 'ProfileCard',
    props: {
        user: {
            type: Object as PropType<Account>,
        },
    },
    data() {
        return {
            account: this.user,
            constants: {
                LOGO: logo,
            },
        }
    },
    mounted: function () {
    },
    computed: {
    },
    methods: {

    },
})