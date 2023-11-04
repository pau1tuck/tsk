import { Request, Response } from "express";
import { IUser } from "@/types/user.types";

class UserController {
    private users: IUser[] = []; // Just for demonstration; this is not the real data store.

    // 2. Get and Set
    get allUsers() {
        return this.users;
    }

    set addUser(user: IUser) {
        this.users.push(user);
    }

    // 3. Static
    static showControllerInfo() {
        console.log("This is the UserController class!");
    }

    async register(req: Request, res: Response): Promise<void> {
        const { givenName, familyName, email } = req.body;
        try {
            const newUser = await userService.create(name, email);

            // Using the setter to add user (for demonstration purposes)
            this.addUser = newUser;

            res.status(201).json(newUser);
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    }

    async updateUser(req: Request, res: Response): Promise<void> {
        // Handle user update logic here
    }

    async login(req: Request, res: Response): Promise<void> {
        // Handle user login logic here
    }

    async logout(req: Request, res: Response): Promise<void> {
        // Handle user logout logic here
    }

    async deleteUser(req: Request, res: Response): Promise<void> {
        // Handle user deletion logic here
    }

    // A method using the getter
    listAllUsers(): IUser[] {
        return this.allUsers;
    }
}

const userController = new UserController();

// Just for demonstration: Add a user and then list all users
userController.addUser = {
    id: 1,
    name: "John",
    email: "john@example.com",
};
console.log(userController.listAllUsers());

class UserController {
    async register(req: Request, res: Response): Promise<void> {
        // Handle user registration logic here
    }
}

const userController = new UserController();
