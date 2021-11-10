import { useHistory } from "react-router";
import CartComponent from "../../Components/CartComponent"
import { useUser } from "../../Providers/Users";


const Cart = () => {

    const { authToken } = useUser()

    const history = useHistory()

    if (authToken === "") {
        history.push("/");
    }

    return (
        <CartComponent />
    )
}

export default Cart;