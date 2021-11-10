import { Route, Switch } from "react-router"
import Login from "../pages/Login";
import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard"
import Cart from "../pages/Cart";


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
                <Dashboard />
            </Route>
            <Route path="/carrinho">
                <Cart />
            </Route>
        </Switch>
    )
}

export default Routes;