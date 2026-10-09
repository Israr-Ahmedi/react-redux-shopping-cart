import React from "react";
import ProductCart from "./product";

export default function AddtoCart({ search }) {
    return (
        <div className="cart-item">

            <ProductCart search={search} />
        </div>
    );
}