import Account from '@/models/Account'

export default {
    setup(props: { user: Account }) {
        const account: Account = props.user
        return { account }
    }
}