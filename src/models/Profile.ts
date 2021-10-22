import Interest from "@/models/Interest"

export default class Profile {
    details: string
    interests: Interest[]

    constructor() {
        this.details = ""
        this.interests = []
    }
}