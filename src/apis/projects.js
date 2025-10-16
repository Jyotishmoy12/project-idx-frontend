import axios from "../config/axiosConfig"

export const createProjectApi = async () => {
    try {
        const response = await axios.post('/api/v1/projects')
        console.log(response)
    } catch (error) {
        console.log(error)
        throw error
    }
}