import axios from "axios";

export default {
    getUsers: () => {
        axios.get('/users')
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error);
                return []
            })
    }
}