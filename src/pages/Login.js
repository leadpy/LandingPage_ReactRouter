import React from "react";
import Template from "../components/Template";
import loginImg from "../assets/login.png"

function Login({ setIsLoggedIn }) {
  return (
    <Template
      title="Bem-vindo de volta à VoxCity"
      desc1="Gerencie suas comunicações com eficiência e praticidade."
      desc2="Seu PABX virtual para facilitar a gestão de chamadas."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Login;