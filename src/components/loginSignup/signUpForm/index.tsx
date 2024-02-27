import { useForm } from "react-hook-form";
import { LoginFormStyle } from "./style";
import { Dispatch, SetStateAction, useState } from "react";
import { api } from "../../../services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";

interface IProps {
  redirect: Dispatch<SetStateAction<string>>;
}

export const SignupFormComponent = ({ redirect }: IProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isProfessor, setIsProfessor] = useState<boolean>(false);
  const [phone, setPhone] = useState("");
  const [parentPhone, setParentPhone] = useState("");

  const navigate = useNavigate();

  type Inputs = {
    name: string;
    email: string;
    parent_name?: string;
    password: string;
    is_professor: boolean;
  };

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = async (body: any) => {
    try {
      await api.post("/users/", {
        ...body,
        is_professor: isProfessor,
        username: body.email,
        phone,
        parent_phone: parentPhone,
      });
      toast.success("Usuario criado com sucesso!");
      const { data } = await api.post("/login/", {
        username: body.email,
        password: body.password,
      });
      localStorage.setItem("token", data.access);
      navigate("/home");
    } catch (error) {
      toast.error("Erro ao criar usuário");
      console.error(error);
    }
  };

  return (
    <LoginFormStyle>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Cadastro de usuário</h2>
        <input {...register("name")} required type="text" placeholder="Nome completo" />
        <InputMask
          onChange={(e) => setPhone(e.target.value)}
          mask="(99) 99999-9999"
          placeholder="Telefone"
          id="telefone"
          name="telefone"
        />
        <input {...register("email")} placeholder="E-mail" type="email" />
        <input
          required
          {...register("password")}
          placeholder="Senha"
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
        <label>
          <input
            type="checkbox"
            onChange={(e) =>
              e.target.checked ? setIsProfessor(true) : setIsProfessor(false)
            }
          />
          É professor?
        </label>
        {!isProfessor && (
          <>
            <input
              required
              {...register("parent_name")}
              placeholder="Nome do responsável"
              type="text"
            />
            <InputMask
              onChange={(e) => setParentPhone(e.target.value)}
              mask="(99) 99999-9999"
              placeholder="Telefone"
              id="telefone"
              name="telefone"
            />
          </>
        )}

        <button>Cadastrar</button>
      </form>
      <p>Já tem uma conta?</p>
      <button  onClick={() => redirect("login")} type="button">
        Entrar
      </button>
    </LoginFormStyle>
  );
};
