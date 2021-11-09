import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs"
import { FiLogOut } from "react-icons/fi"
import { BiSearchAlt2 } from "react-icons/bi"
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
                    <input
                        className="input-search"
                        placeholder="Digitar Pesquisa"
                    />
                    <button className="button-search"> <BiSearchAlt2 /> </button>

                    <Link to="/carrinho">
                        <BsFillCartFill />
                    </Link>

                    <Link>
                        <FiLogOut onClick={handleLogout} />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;