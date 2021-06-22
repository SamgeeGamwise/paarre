export default class Passions {

    sports: string[] = [];
    arts: string[] = [];
    hobbies: string[] = [];

    static allPassions() {
        return {
            sports: [
                "Outdoors",
                "Working Out",
                "Hiking",
                "Yoga",
                "Swimming",
                "Biking",
                "Walking",
                "Running",
            ],
            arts: [
                "Painting"
            ],
            hobbies: [
                "Movies",
                "Volunteering",
            ]
        }
    }

}