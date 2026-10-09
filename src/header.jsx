import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import {
//     login,
//     logout
// } from "../redux/slice";


const Header = () => {

    const dispatch = useDispatch();


    // ========================================
    // CART STATE
    // ========================================

    const cartItems = useSelector(
        (state) => state.cart.items
    );



    const cartCount = cartItems.length;
    console.log(cartCount)



    // ========================================
    // AUTH STATE
    // ========================================

    // const isLoggedIn = useSelector(
    //     (state) => state.auth.isLoggedIn
    // );

    return (
        <header className="header">

            <div className="logo">
                ShopCart
            </div>


            <nav className="navbar">
                <Link to="/">Home</Link>
                <a href="#">Products</a>
            </nav>


            {/* ==================================
                CART
            ================================== */}

            <Link to="/cart">
                <div className="cart-icon">
                    🛒
                    <span>{cartCount > 0 ? cartCount : 0}</span>
                </div>
            </Link>



        </header>
    );
};

export default Header;