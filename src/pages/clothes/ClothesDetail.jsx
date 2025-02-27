import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import apiClothesService from "./apiClothesService";

const ClothesDetail = () => {
    const { id } = useParams();
    const [clothes, setClothes] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        apiClothesService.getClothesById(id, setClothes);
    }, [id]);

    if (!clothes) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    const deleteClothes = () => {
        if (window.confirm("삭제하시겠습니까?")) {
            apiClothesService.deleteClothes(id, () => {
                alert("삭제되었습니다.");
                navigate("/closeList");
            })
        } else {
            alert("취소");
        }
    }

    return (
        <div>
            <h1>{clothes?.cname}</h1>
            <p>{clothes?.ccategory}</p>
            <p>{clothes?.cbrand}</p>
            <p>{clothes?.ccolor}</p>
            <p>{clothes?.csize}</p>
            <p>{clothes?.cmaterial}</p>
            <p>{clothes?.cstock}</p>
            <p>{clothes?.cprice}</p>
            <p>{clothes?.cgender}</p>
            <p>{clothes?.cseason}</p>

            <button onClick={deleteClothes}>삭제</button>
            <button onClick={() => navigate(`/clothes/edit/${clothes.cid}`)}>수정</button>

        </div>
    );



}
export default ClothesDetail;