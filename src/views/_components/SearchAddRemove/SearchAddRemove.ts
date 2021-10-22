import { Ref, ref, onMounted, PropType, defineComponent } from 'vue'
import Interest from '@/models/Interest'

export default {
    setup(props: any) {
        const searchVal: Ref<string> = ref("")
        const searchList: Ref<Interest[]> = ref([])
        const iList: Ref<Interest[]> = ref([])

        const add = (addInterest: Interest) => {
            if (!props.interests.find((interest: Interest) => addInterest.name === interest.name)) {
                const interest: Interest = addInterest
                props.interests.push(interest)
            }
        }

        const remove = (removeInterest: Interest) => {
            const index = props.interests.findIndex((interest: Interest) => interest === removeInterest)

            if (index !== -1) {
                props.interests.splice(index, 1)
            }
        }

        const search = () => {
            searchList.value = Interest.sort(
                iList.value.filter(
                    (interest: Interest) => interest.name.toLowerCase().includes(searchVal.value.toLowerCase()) || interest.type === "category")
            )
        }

        onMounted(async () => {
            iList.value = await Interest.all()
            search()
        })

        return {
            props,
            searchVal,
            searchList,
            iList,
            add,
            remove,
            search
        }
    }
}
