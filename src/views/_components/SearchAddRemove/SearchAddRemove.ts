import { Ref, ref, onMounted } from 'vue'
import Interest from '@/models/Interest'

export default {
    setup(props: { interests: Interest[] } = { interests: [] }) {
        const searchVal: Ref<string> = ref("")
        const searchList: Ref<Interest[]> = ref([])
        const iList: Ref<Interest[]> = ref([])

        const add = (addInterest: Interest) => {
            if (!props.interests.find((interest: Interest) => {
                return addInterest.name === interest.name
            })
            )
                props.interests.push(new Interest(addInterest.name, addInterest.category, addInterest.type))
        }

        const remove = (removeInterest: Interest) => {
            const index = props.interests.findIndex((interest: Interest) => {
                return interest === removeInterest
            })

            if (index !== -1)
                props.interests.splice(index, 1)
        }

        const search = () => {
            searchList.value = Interest.sort(iList.value.filter((interest: Interest) => {
                return interest.name.toLowerCase().includes(searchVal.value.toLowerCase()) || interest.type === "category"
            }))
        }

        onMounted(async () => {
            iList.value = await Interest.all()
            search()
        })

        return {
            searchVal,
            searchList,
            iList,
            add,
            remove,
            search
        }
    }
}
