import axios from 'axios';
// API_URL 이름 사용 금지
const API_URL = "http://localhost:8080/api/clothes";

const apiClothesService = {
    getAllClothes: function (callback) {
        axios
            .get("http://localhost:8080/api/clothes")
            .then(
                (res) => {
                    {
                        callback(res.data);
                    }
                })
            .catch(
                (err) => {
                    console.error(err);
                }
            )
    },

    getClothesById: function (id, callback) {
        axios
            .get(`${API_URL}/${id}`)
            .then((res) => {
                    callback(res.data);
                }
            )
            .catch((err) => {
                console.error(err);
            });
    },


    insertClothes: function (data, callback) {
        axios
            .post(API_URL, data)
            .then(
                (res) => {
                    callback(res.data);
                }
            )
            .catch(
                (err) => {
                    console.error(err);
                }
            )
    },

    updateClothes: function (data, callback) {
        axios
            .put(API_URL, data)
            .then(
                (res) => {
                    callback(res.data)

                }
            )
            .catch(
                (err) => {
                    console.error(err);
                }
            )
    },

    deleteClothes: function (id, callback) {
        axios
            .delete(`${API_URL}/${id}`)
            .then(
                (res) => {
                    callback(res.data);
                }
            )
            .catch(
                (err) => {
                    console.error(err);
                }
            )
    }
}

export default apiClothesService;