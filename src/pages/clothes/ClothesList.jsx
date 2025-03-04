import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClothesCard from "./ClothesCard";
import apiClothesService from "./apiClothesService";

const ClothesList = () => {
    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        apiClothesService.getAllClothes(setClothes);
    }, []);

    const onDelete = (cid) => {
        if (window.confirm("삭제하시겠습니까?")) {
            apiClothesService.deleteClothes(cid, () => {
                alert("삭제되었습니다.");
                apiClothesService.getAllClothes(setClothes);
            });
        } else {
            alert("취소");
        }
    };

    return (
        <div className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {clothes.length > 0 ? (
                        clothes.map((c) => (
                            <ClothesCard
                                key={c.cid}
                                id={c.cid}
                                name={c.cname}
                                price={c.price}
                                image={c.image}
                                handleDelete={onDelete}
                            />
                        ))
                    ) : (
                        <p>게시물이 없습니다.</p>
                    )}
                </div>
                <Link to="/clothes/add">추가</Link>
            </div>
        </div>
    );
};

export default ClothesList;
