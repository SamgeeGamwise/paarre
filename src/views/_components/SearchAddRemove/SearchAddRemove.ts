import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SearchAddRemove',
    props: ["title", "list", "returns"],
    data() {
        return {
            searchVal: '' as string,
            searchList: [] as string[]
        }
    },
    methods: {
        add(passion: string) {
            this.$props.returns.push(passion);
            const index = this.$props.list.indexOf(passion);

            if (index !== -1) {
                this.$props.list.splice(index, 1);
                this.search();
            }
        },
        remove(passion: string) {
            const index = this.$props.returns.indexOf(passion);
            if (index !== -1)
                this.$props.returns.splice(index, 1);
        },
        search() {
            this.searchList = this.$props.list.filter((passion: string) => {
                return passion.toLowerCase().includes(this.searchVal.toLowerCase());
            })
        }
    }
});