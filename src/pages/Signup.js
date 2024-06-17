import React from "react";
import Template from "../components/Template";
import signupImg from "../assets/signup.png"

function Signup({setIsLoggedIn}){
    return(
        <Template
        title="Junte-se à VoxCity"
        desc1="Experimente a eficiência e praticidade de um PABX virtual moderno."
        desc2="Simplifique a gestão de suas comunicações empresariais."
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      />      
    )
}

export default Signup;