import { useEffect, useState } from "react";
import { NotasProfessorStyle } from "./style";
import { api } from "../../../services";
import { aluno } from "../../../interfaces";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

type Inputs = {
  portugues: number;
  matematica: number;
  historia: number;
  geografia: number;
  ciencias: number;
  faltas: number;
};

export const NotasProfessorComponent = () => {
  const [alunosOptions, setAlunosOptions] = useState<aluno[]>([]);
  const [temNotas, setTemNotas] = useState<boolean>(false);

  const { register, handleSubmit, setValue } = useForm<Inputs>();

  const [aluno, setAluno] = useState<number>(0);

  const token = localStorage.getItem("token");

  const getAlunos = async () => {
    try {
      const { data } = await api.get("/users/get/");
      const filterAlunos = data.filter((u: aluno) => !u.is_superuser);
      setAlunosOptions(filterAlunos);
    } catch (error) {
      console.error(error);
    }
  };

  const getBoletim = async () => {
    if (aluno !== 0) {
      try {
        const { data } = await api.get(`/relatorios/${aluno}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setValue("portugues", data.portugues);
        setValue("matematica", data.matematica);
        setValue("historia", data.historia);
        setValue("geografia", data.geografia);
        setValue("ciencias", data.ciencias);
        setValue("faltas", data.faltas);
        setTemNotas(true);
      } catch (error) {
        setTemNotas(false);
        console.error(error);
      }
    }
  };

  const onSubmit = async (body: any) => {
    try {
        if(!temNotas) {
            await api.post(`/relatorios/${aluno}/boletim/`, body, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
              toast.success("Boletim criado com sucesso!");
            } else {
            await api.patch(`/relatorios/${aluno}/`, body, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
              toast.success("Boletim atualizado com sucesso!");
        }
    } catch (error) {
        toast.error("Erro!");
      console.error(error);
    }
  };

  useEffect(() => {
    getAlunos();
  }, []);

  useEffect(() => {
    getBoletim();
  }, [aluno]);

  return (
    <NotasProfessorStyle>
      <ToastContainer />
      <div className="container">
        <header>
          <select onChange={(e) => setAluno(+e.target.value)}>
            <option selected hidden value={0}>
              Selecione um aluno
            </option>
            {alunosOptions.map((a: aluno) => (
              <option value={a.id}>{a.name}</option>
            ))}
          </select>
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="boletim">
            <div className="card">
              <h2>Português</h2>
              <div className="nota">
                <span>Nota</span>
                <input type="number" {...register("portugues")} max={10} />
              </div>
            </div>
            <div className="card">
              <h2>Matemática</h2>
              <div className="nota">
                <span>Nota</span>
                <input type="number" {...register("matematica")} max={10} />
              </div>
            </div>
            <div className="card">
              <h2>História</h2>
              <div className="nota">
                <span>Nota</span>
                <input type="number" {...register("historia")} max={10} />
              </div>
            </div>
            <div className="card">
              <h2>Geografia</h2>
              <div className="nota">
                <span>Nota</span>
                <input type="number" {...register("geografia")} max={10} />
              </div>
            </div>
            <div className="card">
              <h2>Ciencias</h2>
              <div className="nota">
                <span>Nota</span>
                <input type="number" {...register("ciencias")} max={10} />
              </div>
            </div>
            <div className="card">
              <div style={{ alignItems: "center" }} className="nota">
                <span>Faltas</span>
                <input type="number" {...register("faltas")} max={10} />
              </div>
            </div>
          </div>
          <div className="buttons">
            <button>Salvar</button>
          </div>
        </form>
      </div>
    </NotasProfessorStyle>
  );
};
