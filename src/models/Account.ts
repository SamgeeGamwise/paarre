import Profile from "@/models/Profile";
import User from "@/models/User";

export default class Account {
    isAuthenticated: boolean = false;
    isAdmin: boolean = false;
    id: number | null = 5;
    profile: Profile = new Profile();
    user1: User = new User("Samuel", "Krohn", "test@email.com");
    user2: User = new User("Taylor", "Swift", "");
}