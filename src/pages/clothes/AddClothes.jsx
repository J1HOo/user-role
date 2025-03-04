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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!cName || !cColor || !cStock || !cPrice || !cGender || !cSeason) {
            alert("모든 필수 정보를 입력해주세요.");
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
        <div className="container py-5">
            <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                <h1 className="fw-bolder text-center mb-4">의류 추가</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="cName"
                            placeholder="이름"
                            value={cName}
                            onChange={(e) => setCName(e.target.value)}
                            required
                        />
                        <label htmlFor="cName">이름</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="cCategory"
                            placeholder="카테고리"
                            value={cCategory}
                            onChange={(e) => setCCategory(e.target.value)}
                        />
                        <label htmlFor="cCategory">카테고리</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="cBrand"
                            placeholder="브랜드"
                            value={cBrand}
                            onChange={(e) => setCBrand(e.target.value)}
                        />
                        <label htmlFor="cBrand">브랜드</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="cColor"
                            placeholder="색상"
                            value={cColor}
                            onChange={(e) => setCColor(e.target.value)}
                            required
                        />
                        <label htmlFor="cColor">색상</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="cSize"
                            placeholder="사이즈"
                            value={cSize}
                            onChange={(e) => setCSize(e.target.value)}
                        />
                        <label htmlFor="cSize">사이즈</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="cMaterial"
                            placeholder="재질"
                            value={cMaterial}
                            onChange={(e) => setCMaterial(e.target.value)}
                        />
                        <label htmlFor="cMaterial">재질</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="cPrice"
                            placeholder="가격"
                            value={cPrice}
                            onChange={(e) => setCPrice(e.target.value)}
                            required
                        />
                        <label htmlFor="cPrice">가격</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="cStock"
                            placeholder="수량"
                            value={cStock}
                            onChange={(e) => setCStock(e.target.value)}
                            required
                        />
                        <label htmlFor="cStock">수량</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="cGender"
                            placeholder="성별"
                            value={cGender}
                            onChange={(e) => setCGender(e.target.value)}
                            required
                        />
                        <label htmlFor="cGender">성별</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="cSeason"
                            placeholder="시즌"
                            value={cSeason}
                            onChange={(e) => setCSeason(e.target.value)}
                            required
                        />
                        <label htmlFor="cSeason">시즌</label>
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary btn-lg">
                            추가
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClothes;
