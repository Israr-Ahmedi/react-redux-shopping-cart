import React, { useState, useEffect } from "react";
import { rmvItem, clrItem } from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CartList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartList = useSelector(
        (state) => state.cart.items
    );

    // const totalPrice = cartList.reduce(
    //     (total, item) => { item.quantity ? total + item.price * item.quantity : total + item.price }, 0);

    const handlePlaceOrder = () => {
        dispatch(clrItem());
        alert("Order placed");
        navigate("/");
    };

    //quantity add incerement total amount with items amount
    const [cartItem, setCartItem] = useState(cartList)

    useEffect(() => {
        setCartItem(cartList);
    }, [cartList]);


    const handleChng = (id, q) => {

        let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
        const CartTemp = cartItem.map((item) => {
            return item.id == id ? { ...item, quantity } : item
        })
        setCartItem(CartTemp)

    }

    return (
        <div className="cart-page">
            <div className="cart-header">
                <h2>Your Cart</h2>
                <span>{cartItem.length} Items</span>
            </div>

            {cartItem.length === 0 ? (
                <div className="empty-cart">
                    Your Cart is Empty
                </div>
            ) : (
                <>
                    <div className="cart-container">
                        {cartItem.map((item) => (
                            <div
                                className="cart-product"
                                key={item.id}
                            >
                                <img src={item.thumbnail} />

                                <div className="cart-product-details">
                                    <h3>{item.title}</h3>
                                    <p>{item.brand}</p>
                                </div>

                                <div className="cart-price-box">
                                    <div>
                                        <input
                                            type="number" placeholder="Enter Quantity"
                                            onChange={(e) => handleChng(item.id, e.target.value)} value={item.quantity ? item.quantity : 1} />
                                    </div>
                                    <div>
                                        <p className="cart-price">
                                            ${(item.quantity ? item.quantity * item.price : item.price).toFixed(2)}
                                        </p>

                                        <button
                                            onClick={() =>
                                                dispatch(rmvItem(item))
                                            }
                                            className="cart-remove-btn"
                                        >
                                            Remove
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-total">
                        <h3>
                            Total: ${(cartItem.reduce((sum, item) => item.quantity ? sum + item.price * item.quantity : sum + item.price, 0).toFixed(2))}

                        </h3>
                    </div>
                    <button
                        onClick={handlePlaceOrder}
                        className="cart-place-btn"
                    >
                        Place to Order
                    </button>
                </>
            )}
        </div>
    );
}