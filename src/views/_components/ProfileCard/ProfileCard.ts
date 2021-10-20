import Account from '@/models/Account'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: 'ProfileCard',
    props: {
        user: {
            type: Object as PropType<Account>,
        },
    },
    data() {
        return {
            account: this.user
        }
    },
    mounted: function () {
    },
    computed: {
    },
    methods: {

    },
})