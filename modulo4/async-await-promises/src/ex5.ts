import axios from "axios";
import baseUrl from "./constants/baseUrl";
import { User } from "./types/types";

// Exercício 5
export const sendNotfications = async (users: User[], msg: string): Promise<void> => {
    try {
        for (const user of users) {
            await axios.post(`${baseUrl}notifications`, {subscriberId: user.id, message: msg});
        };

        console.log('All notifications send');
    }
    catch {
        console.log('Error');
    }
};