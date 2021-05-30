import axios from "axios";

/**
 *
 * @param {string} authToken
 */
export const API = (authToken, githubToken) => {
    return axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}`,
        headers: {
            Authorization: authToken,
            githubToken,
        },
    });
};
