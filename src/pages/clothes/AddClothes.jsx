import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClothesService from "./apiClothesService";

const AddClothes = () => {
    const navigate = useNavigate();
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

    const addClothes = () => {
        if (!cName || !cColor || !cStock || !cPrice || !cGender || !cSeason) {
            alert("모든 필수 정보를 입려");
            return;
        }

        const addContent = {
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

        apiClothesService.insertClothes(addContent, () => {
            alert("추가되었습니다.");
            navigate("/closeList");
        });
    };

    return (
        <div>
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
            <button onClick={addClothes}>추가</button>
        </div>
    );
};

export default AddClothes;