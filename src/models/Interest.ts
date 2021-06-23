import { Passion, PassionListCategory } from "@/typescript/types";

export default class Interest {

    name: string;
    category: string;
    type: string;


    constructor(name: string, category: string, type: string) {
        this.name = name;
        this.category = category;
        this.type = type;
    }


    static all(): Interest[] {
        return [
            { name: "Sports", category: "Sports", type: "category" },
            { name: "Outdoors", category: "Sports", type: "value" },
            { name: "Working Out", category: "Sports", type: "value" },
            { name: "Hiking", category: "Sports", type: "value" },
            { name: "Yoga", category: "Sports", type: "value" },
            { name: "Swimming", category: "Sports", type: "value" },
            { name: "Biking", category: "Sports", type: "value" },
            { name: "Walking", category: "Sports", type: "value" },
            { name: "Running", category: "Sports", type: "value" },
            { name: "Arts", category: "Arts", type: "category" },
            { name: "Painting", category: "Arts", type: "value" },
            { name: "Sculpting", category: "Arts", type: "value" },
            { name: "Hobbies", category: "Hobbies", type: "category" },
            { name: "Movies", category: "Hobbies", type: "value" },
            { name: "Volunteering", category: "Hobbies", type: "value" },
            { name: "Video Games", category: "Hobbies", type: "value" },
            { name: "Card Games", category: "Hobbies", type: "value" },
            { name: "Board Games", category: "Hobbies", type: "value" },

        ]
    }

    static allCategories(interests: Interest[]): string[] {
        const typeCategory: Interest[] = interests.filter((interest: Interest) => {
            return interest.type === "category"
        });

        const categoryList: string[] = typeCategory.map((interest: Interest) => {
            return interest.category;
        })

        return categoryList;
    }

    static sort(interests: Interest[]): Interest[] {
        const categories = Interest.allCategories(Interest.all());
        interests = interests.filter((interest: Interest) => {
            return interest.type === "value";
        });

        interests = interests.sort((a: Interest, b: Interest) => {
            return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
        })

        interests = interests.sort((a: Interest, b: Interest) => {
            return (a.category > b.category) ? 1 : ((b.category > a.category) ? -1 : 0)
        })

        interests.forEach((interest: Interest, index: number) => {
            if (categories.includes(interest.category)) {
                interests.splice(index, 0, new Interest(interest.category, interest.category, "category"));
                categories.splice(categories.indexOf(interest.category), 1)
            }
        })
        return interests;
    }
}