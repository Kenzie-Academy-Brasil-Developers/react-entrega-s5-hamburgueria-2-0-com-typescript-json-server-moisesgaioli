import { useHistory } from "react-router"
import Header from "../../Components/Header"
import ProductsComponent from "../../Components/ProductsComponent"
import { useUser } from "../../Providers/Users"


const Products = () => {

    const { authToken } = useUser()

    const history = useHistory()

    if (authToken === "") {
        history.push("/");
    }

    return (
        <>
            <Header />
            <ProductsComponent />
        </>
    )
}

export default Products