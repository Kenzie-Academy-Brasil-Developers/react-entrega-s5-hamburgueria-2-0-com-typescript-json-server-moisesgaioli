import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs"
import { FiLogOut } from "react-icons/fi"
import { useUser } from "../../Providers/Users";
import LogoHeader from "../LogoHeader";
import { useProducts } from "../../Providers/Products";

import "./styles.css"
import { useCart } from "../../Providers/Cart";

const Header = () => {

    const { handleLogout } = useUser();
    const { setSearch } = useProducts();
    const { cart } = useCart();

    
    return (
        <header>
            <nav className="header-container">
                <div className="header-logo">
                    <LogoHeader />
                </div>
                <div className="header-menu">
                    <div className="input-search-container">
                        <input
                            type="text" 
                            onChange={e => setSearch(e.target.value)}
                            className="input-search input-search-product" 
                            placeholder="Bucar por categoria" 
                        />
                    </div>
                    <div className="cart-header"> 
                        <Link to="/carrinho">
                                <p className="cart-number"> {cart.length} </p>
                            <BsFillCartFill />
                        </Link>
                    </div>

                    <FiLogOut className="button-logout" onClick={handleLogout} />
                </div>
            </nav>
        </header>
    )
}

export default Header;