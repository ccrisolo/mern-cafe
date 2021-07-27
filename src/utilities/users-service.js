import * as usersAPI from "./users-api";

export async function signUp(userData) {
    try {
        // Delegate the network request code to the users-api.js API module
        // which will ultimately return a JSON Web Token (JWT)
        const token = await usersAPI.signUp(userData);
        //persist the 'token' in browsers local storage
        localStorage.setItem("token", token);
        // Baby step by returning whatever is sent back by the server
        return token;
    } catch {
        throw new Error("Invalid Sign Up");
    }
}
