import axios from 'axios';
// API_URL 이름 사용 금지
const API_URL = "http://localhost:8080/api/clothes";

const apiClothesService = {
    getAllClothes: function(callback) {
        axios
            .get("http://localhost:8080/api/clothes")
            .then(
                (res) => {
                    console.log(res.data)
                    if (res.data.length > 0) {
                        callback(res.data);
                    } else {
                        alert("옷 목록이 존재하지 않습니다.");
                        console.error(res.data);
                    }
                }
            )
            .catch(
                (err) => {
                    console.error(err);
                }
            )
    },
}

export default apiClothesService;