import Interest from '@/models/Interest';
import { PropType } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SearchAddRemove',
    props: {
        interests: { type: Array as PropType<Array<Interest>>, default: () => [] },
    },
    data() {
        return {
            searchVal: '' as string,
            searchList: [] as Interest[],
            iList: [] as Interest[]
        }
    },
    async mounted() {
        this.iList = await Interest.all();
        this.search()
    },
    methods: {
        add(addInterest: Interest) {
            if (!this.$props.interests.find((interest: Interest) => {
                return addInterest.name === interest.name;
            })
            )
                this.$props.interests.push(new Interest(addInterest.name, addInterest.category, addInterest.type));
        },
        remove(removeInterest: Interest) {
            const index = this.$props.interests.findIndex((interest: Interest) => {
                return interest === removeInterest;
            });

            if (index !== -1)
                this.$props.interests.splice(index, 1);
        },
        search() {
            this.searchList = Interest.sort(this.iList.filter((interest: Interest) => {
                return interest.name.toLowerCase().includes(this.searchVal.toLowerCase()) || interest.type === "category";
            }));
        }
    }
});