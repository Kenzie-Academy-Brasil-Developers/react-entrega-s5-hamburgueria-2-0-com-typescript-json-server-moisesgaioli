import { FiShoppingBag } from "react-icons/fi"
import Logo from "../Logo";
import "./styles.css"

const Slogan = () => {

    return (
        <section className="slogan-container">
            <div className="icon-container">
                <FiShoppingBag className="slogan-icon" />
            </div>
            <p className="font-headline slogan-text"> A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes. </p>
        </section>
    )
}

export default Slogan;