import Profile from "@/models/Profile"
import User from "@/models/User"

export default class Account {
    id: number = 0;
    isAdmin: boolean = false;
    email: string = "";
    profile: Profile = new Profile();
    user1: User = new User();
    user2: User = new User();
}