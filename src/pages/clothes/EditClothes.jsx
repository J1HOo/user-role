import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import apiClothesService from "./apiClothesService";

const EditClothes = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [clothes, setClothes] = useState(null);

    const [cName, setCName] = useState("");
    const [cCategory, setCCategory] = useState("");
    const [cBrand, setCBrand] = useState("");
    const [cColor, setCColor] = useState("");
    const [cSize, setCSize] = useState("");
    const [cMaterial, setCMaterial] = useState("");
    const [cPrice, setCPrice] = useState("");
    const [cStock, setCStock] = useState("");
    const [cGender, setCGender] = useState("");
    const [cSeason, setCSeason] = useState("");

    useEffect(() => {
        apiClothesService.getClothesById(id, (data) => {
            setClothes(data);

            setCName(data.cname);
            setCCategory(data.ccategory);
            setCBrand(data.cbrand);
            setCColor(data.ccolor);
            setCSize(data.csize);
            setCMaterial(data.cmaterial);
            setCPrice(data.cprice);
            setCStock(data.cstock);
            setCGender(data.cgender);
            setCSeason(data.cseason);
        });
    }, [id]);

    if (!clothes) {
        return <div>Loading...</div>;
    }

    const updateClothes = () => {
        const updateContent = {
            cid: id,  // API 응답 형식에 맞게 수정
            cname: cName,
            ccategory: cCategory,
            cbrand: cBrand,
            ccolor: cColor,
            csize: cSize,
            cmaterial: cMaterial,
            cprice: cPrice,
            cstock: cStock,
            cgender: cGender,
            cseason: cSeason,
        };

        apiClothesService.updateClothes(updateContent, () => {
            alert("수정");
            navigate("/closeList");
        });
    };

    return (
        <div>
            <h1>Edit Clothes</h1>

            <div>
                <label>이름</label>
                <input
                    type="text"
                    value={cName}
                    onChange={(e) => setCName(e.target.value)}
                />
            </div>

            <div>
                <label>카테고리</label>
                <input
                    type="text"
                    value={cCategory}
                    onChange={(e) => setCCategory(e.target.value)}
                />
            </div>

            <div>
                <label>브랜드</label>
                <input
                    type="text"
                    value={cBrand}
                    onChange={(e) => setCBrand(e.target.value)}
                />
            </div>

            <div>
                <label>색상</label>
                <input
                    type="text"
                    value={cColor}
                    onChange={(e) => setCColor(e.target.value)}
                />
            </div>

            <div>
                <label>사이즈</label>
                <input
                    type="text"
                    value={cSize}
                    onChange={(e) => setCSize(e.target.value)}
                />
            </div>

            <div>
                <label>재질</label>
                <input
                    type="text"
                    value={cMaterial}
                    onChange={(e) => setCMaterial(e.target.value)}
                />
            </div>

            <div>
                <label>가격</label>
                <input
                    type="text"
                    value={cPrice}
                    onChange={(e) => setCPrice(e.target.value)}
                />
            </div>

            <div>
                <label>수량</label>
                <input
                    type="text"
                    value={cStock}
                    onChange={(e) => setCStock(e.target.value)}
                />
            </div>

            <div>
                <label>성별</label>
                <input
                    type="text"
                    value={cGender}
                    onChange={(e) => setCGender(e.target.value)}
                />
            </div>

            <div>
                <label>시즌</label>
                <input
                    type="text"
                    value={cSeason}
                    onChange={(e) => setCSeason(e.target.value)}
                />
            </div>

            <button onClick={updateClothes}>Update</button>
        </div>
    );
};

export default EditClothes;