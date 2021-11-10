import { useUser } from "../../Providers/Users"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

import "./styles.css"
import { Link } from "react-router-dom";

const FormLogin = () => {

    const { handleLogin } = useUser()

    const FormSchema = yup.object().shape({
        email: yup.string().email("Email inválido").required("Email obrigatório"),
        password: yup.string().required("Senha obrigatória"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(FormSchema)
    })

    const submitData = (data) => {
        handleLogin(data)
    }

    return (
        <div className="form-container-login">
            <h3 className="login-title font-heading-3"> Login </h3>
            <form className="form-login" onSubmit={handleSubmit(submitData)}>
                <div className="input-container">
                    <input className="input-login font-body input-mobile" placeholder="Email" {...register("email")} />
                    <span style={{color: "#E60000" , fontSize:"12px"}}> {errors.email?.message} </span>
                </div>
                <div className="input-container">
                    <input className="input-login font-body input-mobile" placeholder="Senha" type="password" {...register("password")} />
                    <span style={{color: "#E60000" , fontSize:"12px"}}> {errors.password?.message} </span>
                </div>
                <button className="button-default button-login button-green" type="submit"> Logar </button>
                <p className="font-body text-center"> Crie sua conta para saborear muitas delícias e matar sua fome! </p>
                <Link to="/cadastro">
                    <button className="button-default button-login button-gray--light"> Cadastrar </button>
                </Link>
            </form>
        </div>
    )
}

export default FormLogin;