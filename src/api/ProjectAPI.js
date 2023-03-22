import axios from "axios";

const BASE_URL = "https://cait-portfolio-server.vercel.app";

export class ProjectAPI {
    static async fetchAll() {
        return (await axios.get(`${BASE_URL}/projects`)).data
    }

    static async fetchProject(id) {
        return (await axios.get(`${BASE_URL}/projects/${id}`)).data
    }
}