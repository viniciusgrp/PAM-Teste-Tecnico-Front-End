import { useForm } from "react-hook-form";
import { LoginFormStyle } from "./style";
import { Dispatch, SetStateAction, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { api } from "../../../services";
import { useNavigate } from "react-router-dom";

interface IProps {
  redirect: Dispatch<SetStateAction<string>>;
}

type Inputs = {
  email: string;
  password: string;
};

export const LoginFormComponent = ({ redirect }: IProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = async (body: any) => {
    try {
      const { data } = await api.post("/login/", {
        username: body.email,
        password: body.password,
      });
      localStorage.setItem("token", data.access);
      const payload = data.access.split(".")[1];
      const decodedPayload: any = atob(payload);
      if (JSON.parse(decodedPayload).is_superuser) {
        navigate("/professor");
      } else {
        navigate("/home");
      }
    } catch (error) {
      toast.error("Usuário ou senha inválidos");
      console.error(error);
    }
  };

  return (
    <LoginFormStyle>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Acesso ao sistema</h2>
        <input
          {...register("email")}
          placeholder="E-mail"
          type="email"
          required
        />
        <input
          {...register("password")}
          placeholder="Senha"
          required
          type={showPassword ? "text" : "password"}
        />
        <label>
          <input
            onChange={(e) =>
              e.target.checked ? setShowPassword(true) : setShowPassword(false)
            }
            type="checkbox"
          />
          Mostrar senha
        </label>
        <button>Entrar</button>
      </form>
      <p>Ainda não tem uma conta?</p>
      <button onClick={() => redirect("signup")} type="button">
        Cadastre-se
      </button>
    </LoginFormStyle>
  );
};
