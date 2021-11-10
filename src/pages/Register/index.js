import { useHistory } from "react-router";
import FormRegister from "../../Components/FormRegister"
import Logo from "../../Components/Logo";
import Slogan from "../../Components/Slogan";
import { useUser } from "../../Providers/Users";

import "./styles.css"

const Register = () => {

    const { authToken } = useUser()

    const history = useHistory()

    if (authToken) {
        history.push("/dashboard");
    }

    return (
        <section className="page-register">
            <div className="slogan-logo-register">
                <Logo />
                <Slogan />
            </div>
            <FormRegister />
        </section>
    )
}

export default Register;