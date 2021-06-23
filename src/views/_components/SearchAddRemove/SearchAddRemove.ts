import Interest from '@/models/Interest';
import { Passion, PassionListCategory } from '@/typescript/types';
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
            searchList: [] as Interest[]
        }
    },
    mounted() {
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
            const iList: Interest[] = Interest.all().filter((interest: Interest) => {
                return interest.name.toLowerCase().includes(this.searchVal.toLowerCase()) || interest.type === "category";
            });

            this.searchList = Interest.sort(iList);
        }
    }
});