import { LoginFormComponent } from "../../components/loginSignup/loginForm";
import { LoginPageStyle } from "./style";
import Logo from "../../assets/logo.png";
import { useState } from "react";
import { SignupFormComponent } from "../../components/loginSignup/signUpForm";

export const LoginPage = () => {
  const [loginSignup, setLoginSignup] = useState("login");

    

  return (
    <LoginPageStyle>
      <div className="container">
        {loginSignup === "login" ? (
          <>
            <img className="logo" src={Logo} alt="Logo da escola " />
            <LoginFormComponent redirect={setLoginSignup} />
          </>
        ) : (
          <SignupFormComponent redirect={setLoginSignup} />
        )}
      </div>
    </LoginPageStyle>
  );
};
