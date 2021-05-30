import axios from "axios";

/**
 *
 * @param {string} authToken
 */
export const API = (authToken, githubToken) => {
    return axios.create({
        baseURL: `http://localhost:5000`,
        headers: {
            Authorization: authToken,
            githubToken,
        },
    });
};
