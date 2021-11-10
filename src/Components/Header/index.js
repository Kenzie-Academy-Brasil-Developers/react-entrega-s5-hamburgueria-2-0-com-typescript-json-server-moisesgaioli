import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs"
import { FiLogOut } from "react-icons/fi"
import { useUser } from "../../Providers/Users";
import LogoHeader from "../LogoHeader";

import "./styles.css"

const Header = () => {

    const { handleLogout } = useUser()

    return (
        <header className="header-container">
            <nav>
                <div className="header-logo">
                    <LogoHeader />
                </div>
                <div className="header-menu">
                    <Link to="/carrinho">
                        <BsFillCartFill />
                    </Link>

                    <FiLogOut className="button-logout" onClick={handleLogout} />
                </div>
            </nav>
        </header>
    )
}

export default Header;