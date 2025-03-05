import { Link } from "react-router-dom";

const ProductCard = ({ id, name, price, image, onDelete }) => {
    return (
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src={image} alt={name} />
                <div className="card-body p-4 text-center">
                    <h5 className="fw-bolder">
                        <Link to={`/product/${id}`} className="text-decoration-none">
                            {name}
                        </Link>
                    </h5>
                    {price}
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <button onClick={() => onDelete(id)} className="btn btn-outline-dark mt-auto">
                            삭제
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
