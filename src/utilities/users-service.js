import * as usersAPI from "./users-api";

export const signUp = async userData => {
    try {
        // Delegate the network request code to the users-api.js API module
        // which will ultimately return a JSON Web Token (JWT)
        const token = await usersAPI.signUp(userData);
        // Baby step by returning whatever is sent back by the server
        return token;
    } catch {
        throw new Error("Invalid Sign Up");
    }
};
