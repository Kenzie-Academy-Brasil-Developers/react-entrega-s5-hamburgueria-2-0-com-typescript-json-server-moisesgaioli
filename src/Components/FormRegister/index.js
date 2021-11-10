import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useUser } from "../../Providers/Users";
import { Link } from "react-router-dom";

import "./styles.css"

const FormRegister = () => {

    const { handleRegister } = useUser()
    
    const formSchema = yup.object().shape({
        name: yup.string().min(2, "Deve conter no mínimo 2 caracteres").matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Deve conter somente letras").required("Nome obrigatório"),
        email: yup.string().required("Email obrigatório").email("Digite um email válido"),
        password: yup.string().required("Senha obrigatória").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#:])[0-9a-zA-Z$*&@#:]{8,}$/, "Senha deve conter letra maiúscula, minúscula e caractere especial"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "As senhas devem ser idênticas").required("Senha obrigatória"),
    })

    const { register, handleSubmit, formState : { errors } } = useForm({
        resolver: yupResolver(formSchema), 
    })

    const submitData = (data) => {
        handleRegister(data)
    }

    return (
        <div className="form-container-register">
            <h3 className="register-title font-heading-3"> Cadastro </h3>
            <form className="form-register" onSubmit={handleSubmit(submitData)}>
                <div className="input-container">
                    <input className="input-login" placeholder="Nome" {...register("name")} />
                    <span style={{color: "#E60000" , fontSize:"12px"}}> {errors.name?.message} </span>
                </div>
                <div className="input-container">
                    <input className="input-login" placeholder="Email" {...register("email")} />
                    <span style={{color: "#E60000" , fontSize:"12px"}}> {errors.email?.message} </span>
                </div>
                <div className="input-container">
                    <input className="input-login" placeholder="Senha" type="password" {...register("password")} />
                    <span style={{color: "#E60000" , fontSize:"12px"}}> {errors.password?.message} </span>
                </div>
                <div className="input-container">
                    <input className="input-login" placeholder="Confirmar senha" type="password" {...register("confirmPassword")} />
                    <span style={{color: "#E60000" , fontSize:"12px"}}> {errors.confirmPassword?.message} </span>
                </div>
                <button className="button-default button-login button-gray--light" type="submit"> Cadastrar </button>
            </form>
            <div className="form-register--link">
                <Link to="/"> Retornar para login </Link>
            </div>
        </div>
    )
}

export default FormRegister