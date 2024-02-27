import { PerfilFormStyle } from "./style";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../../services";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { DeleteModalComponent } from "../deleteModal";

export const PerfilFormComponent = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isProfessor, setIsProfessor] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");
  const [parentPhone, setParentPhone] = useState<string>("");
  const [userId, setUserId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  type Inputs = {
    name: string;
    email: string;
    parent_name?: string;
    password: string;
    is_professor: boolean;
  };

  const { register, handleSubmit, setValue } = useForm<Inputs>();

  const getUserInfos = async () => {
    try {
      if (userId) {
        const { data } = await api.get(`/users/${userId}/`);
        console.log(data);
        setValue("name", data.name);
        setValue("email", data.email);
        setPhone(data.phone);
        setValue("parent_name", data.parent_name);
        setParentPhone(data.parent_phone);
        setValue("email", data.email);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const verify = () => {
    const token = localStorage.getItem("token") || "";
    if (!token) {
      navigate("/login");
    } else {
      const payload = token.split(".")[1];
      const decodedPayload: any = atob(payload);

      console.log(JSON.parse(decodedPayload));

      setIsProfessor(JSON.parse(decodedPayload).is_superuser);
      setUserId(JSON.parse(decodedPayload).user_id);
    }
  };

  useEffect(() => {
    verify();
  }, []);

  useEffect(() => {
    getUserInfos();
  }, [userId]);

  const onSubmit = async (body: any) => {
    try {
      await api.patch(`/users/${userId}/`, {
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
    <PerfilFormStyle onSubmit={handleSubmit(onSubmit)}>
      <h2>Meu perfil</h2>
      <input
        {...register("name")}
        required
        type="text"
        placeholder="Nome completo"
      />
      <InputMask
        onChange={(e) => setPhone(e.target.value)}
        mask="(99) 99999-9999"
        placeholder="Telefone"
        id="telefone"
        name="telefone"
        value={phone}
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
          checked={isProfessor}
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
            value={parentPhone}
            placeholder="Telefone"
            id="telefone"
            name="telefone"
          />
        </>
      )}

      <button>Salvar</button>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        style={{ backgroundColor: "red", color: "white" }}
      >
        Excluir Conta
      </button>
      {showModal && (
        <DeleteModalComponent showModal={setShowModal} userId={userId} />
      )}
    </PerfilFormStyle>
  );
};
