import { useHistory } from "react-router"
import FormLogin from "../../Components/FormLogin"
import Logo from "../../Components/Logo"
import Slogan from "../../Components/Slogan"
import { useUser } from "../../Providers/Users"

import "./styles.css"

const Login = () => {

    const { authToken } = useUser()

    const history = useHistory()

    if (authToken) {
        history.push("/dashboard");
    }

    return (
        <section className="page-login">
            <div className="slogan-logo">
                <Logo />
                <Slogan />
            </div>

            <FormLogin />
        </section>
    )
}

export default Login