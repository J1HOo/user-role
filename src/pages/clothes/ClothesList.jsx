import {useEffect, useState} from "react";
import apiClothesService from "./apiClothesService";
import {Link} from "react-router-dom";

const ClothesList = () => {
    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        apiClothesService.getAllClothes(setClothes);
    }, []);

    return (
        <div>
            <ul>
                {clothes.length > 0 ? (
                    clothes.map((c) => (
                        <li key={c.cid}>
                            <p> {c.ccategory}</p>
                            <p> {c.cbrand}</p>
                            <p> {c.cname}</p>

                            <Link to={`/clothes/${c.cid}`}>상세</Link>
                        </li>
                    ))
                ) : (
                    <p>게시물이 없습니다.</p>
                )}
            </ul>

            <Link to={"/clothes/add"}>추가</Link>
        </div>
    )}

export default ClothesList;