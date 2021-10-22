import { ServerResponse } from "@/typescript/types"
import axios from "../services/axios"


export default class Interest {
    name: string
    category: string
    type: string

    constructor() {
        this.name = ""
        this.category = "category"
        this.type = ""
    }


    static async all(): Promise<Interest[]> {
        const interests = await (await axios.get<ServerResponse<Interest[]>>("/interests")).data.data
        return interests
    }

    static allCategories(interests: Interest[]): string[] {
        const typeCategory: Interest[] = interests.filter((interest: Interest) => {
            return interest.type === "category"
        })

        const categoryList: string[] = typeCategory.map((interest: Interest) => {
            return interest.category
        })

        return categoryList
    }

    static sort(interests: Interest[]): Interest[] {
        const categories = Interest.allCategories(interests)
        interests = interests.filter((interest: Interest) => {
            return interest.type === "value"
        })

        interests = interests.sort((a: Interest, b: Interest) => {
            return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
        })

        interests = interests.sort((a: Interest, b: Interest) => {
            return (a.category > b.category) ? 1 : ((b.category > a.category) ? -1 : 0)
        })

        interests.forEach((interest: Interest, index: number) => {
            if (categories.includes(interest.category)) {
                interests.splice(index, 0, new Interest())
                categories.splice(categories.indexOf(interest.category), 1)
            }
        })
        return interests
    }
}