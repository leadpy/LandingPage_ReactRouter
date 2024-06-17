import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function SignupForm({ setIsLoggedIn }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        razaoSocial: "",
        cnpj: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();
    const [accountType, setAccountType] = useState("student");

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ));
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("As senhas não coincidem");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Conta criada com sucesso");
        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        };
        console.log("Imprimindo dados do novo cliente");
        console.log(finalData);
        navigate("/dashboard");
    }

    return (
        <div>
            <form onSubmit={submitHandler}>

                {/* Nome e Sobrenome */}
                <div className='flex flex-col md:flex-row gap-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Nome<sup className='text-pink-200'>*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            placeholder="Digite seu nome"
                            onChange={changeHandler}
                            value={formData.firstName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Sobrenome<sup className='text-pink-200'>*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            placeholder="Digite seu sobrenome"
                            onChange={changeHandler}
                            value={formData.lastName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>

                {/* Email */}
                <div className='mt-[20px]'>
                    <label className='w-full mt-[20px]'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Digite seu email"
                            onChange={changeHandler}
                            value={formData.email}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>

                {/* Razão Social */}
                <div className='mt-[20px]'>
                    <label className='w-full mt-[20px]'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Razão Social<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="razaoSocial"
                            placeholder="Digite a razão social"
                            onChange={changeHandler}
                            value={formData.razaoSocial}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>

                {/* CNPJ */}
                <div className='mt-[20px]'>
                    <label className='w-full mt-[20px]'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>CNPJ<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="cnpj"
                            placeholder="Digite o CNPJ"
                            onChange={changeHandler}
                            value={formData.cnpj}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>

                {/* Criar Senha e Confirmar Senha */}
                <div className='w-full flex flex-col md:flex-row gap-4 mt-[20px]'>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Criar Senha<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Digite sua senha"
                            onChange={changeHandler}
                            value={formData.password}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                        </span>
                    </label>

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirmar Senha<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Confirme sua senha"
                            onChange={changeHandler}
                            value={formData.confirmPassword}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                        </span>
                    </label>
                </div>

                <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Criar Conta</button>

            </form>
        </div>
    );
}

export default SignupForm;
