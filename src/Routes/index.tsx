import { Route, Switch } from "react-router"
import Login from "../pages/Login";
import Register from "../pages/Register"
import Products from "../pages/Products"
import Cart from "../pages/Cart";
// import Products from "../pages/Products"

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route path="/cadastro">
                <Register />
            </Route>
            <Route path="/dashboard">
                <Products />
            </Route>
            <Route path="/carrinho">
                <Cart />
            </Route>
        </Switch>
    )
}

export default Routes;