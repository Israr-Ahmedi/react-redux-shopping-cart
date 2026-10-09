import { useEffect } from "react";
import { addItem, rmvItem } from "../redux/slice";
import { fetchproducts } from "../redux/Productslice";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

const ProductCart = ({ search }) => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchproducts());
    }, [dispatch]);

    const productSelector = useSelector(
        (state) => state.product.items
    );

    const cartSelector = useSelector(
        (state) => state.cart.items
    );

    const filteredProducts = (productSelector || []).filter((item) => {
        const searchText = search.trim().toLowerCase();

        // Search across all top-level product fields
        return Object.values(item).some((value) =>
            String(value ?? "").toLowerCase().includes(searchText)
        );
    });

    return (
        <div className="grid">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                    <div className="cart" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />

                        <div className="content">
                            <div>{item.title}</div>
                            <div>{item.brand}</div>
                            <div>${item.price}</div>
                            <div>{item.rating}</div>

                            {cartSelector.some(
                                (cartItem) => cartItem.id === item.id
                            ) ? (
                                <button
                                    onClick={() => dispatch(rmvItem(item.id))}
                                    className="btn btn-disable"
                                >
                                    Remove from Cart
                                </button>
                            ) : (
                                <button
                                    onClick={() => dispatch(addItem(item))}
                                    className="btn"
                                >
                                    Add to Cart
                                </button>
                            )}
                        </div>
                    </div>
                ))
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );


};

export default ProductCart;
