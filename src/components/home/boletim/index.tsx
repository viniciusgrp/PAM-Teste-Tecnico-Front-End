import { useEffect, useState } from "react";
import { BoletimStyle } from "./style";
import { api } from "../../../services";
import { boletim } from "../../../interfaces";

export const BoletimComponent = () => {
  const [userId, setUserId] = useState<number>(0);
  const [boletim, setBoletim] = useState<boletim>({});
  const token = localStorage.getItem("token") || "";

  const verify = () => {
    const payload = token.split(".")[1];
    const decodedPayload: any = atob(payload);
    setUserId(JSON.parse(decodedPayload).user_id);
  };

  const getBoletim = async () => {
    if (userId !== 0) {
      try {
        const { data } = await api.get(`/relatorios/${userId}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBoletim(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    verify();
  }, []);

  useEffect(() => {
    getBoletim();
  }, [userId]);

  return (
    <BoletimStyle>
      <h2>Boletim de: {boletim?.aluno?.name}</h2>
      <div className="boletim">
        <div className="card">
          <div style={{backgroundColor: boletim?.portugues > 6 ? 'green' : boletim?.portugues > 4 ? 'yellow' : 'red'}} className="alerta"></div>
          <div className="infos">

          <h2>Português</h2>
          <div className="nota">
            <p>Nota</p>
            <span>{boletim?.portugues}</span>
          </div>
          </div>
        </div>
        <div className="card">
          <div style={{backgroundColor: boletim?.matematica > 6 ? 'green' : boletim?.matematica > 4 ? 'yellow' : 'red'}} className="alerta"></div>
          <div className="infos">

          <h2>Matemática</h2>
          <div className="nota">
            <p>Nota</p>
            <span>{boletim?.matematica}</span>
          </div>
          </div>
        </div>
        <div className="card">
          <div style={{backgroundColor: boletim?.historia > 6 ? 'green' : boletim?.historia > 4 ? 'yellow' : 'red'}} className="alerta"></div>
          <div className="infos">

          <h2>História</h2>
          <div className="nota">
            <p>Nota</p>
            <span>{boletim?.historia}</span>
          </div>
          </div>
        </div>
        <div className="card">
          <div style={{backgroundColor: boletim?.geografia > 6 ? 'green' : boletim?.geografia > 4 ? 'yellow' : 'red'}} className="alerta"></div>
          <div className="infos">

          <h2>Geografia</h2>
          <div className="nota">
            <p>Nota</p>
            <span>{boletim?.geografia}</span>
          </div>
          </div>
        </div>
        <div className="card">
          <div style={{backgroundColor: boletim?.ciencias > 6 ? 'green' : boletim?.ciencias > 4 ? 'yellow' : 'red'}} className="alerta"></div>
          <div className="infos">

          <h2>Ciências</h2>
          <div className="nota">
            <p>Nota</p>
            <span>{boletim?.ciencias}</span>
          </div>
          </div>
        </div>
        <div className="card">
          <div style={{backgroundColor: boletim?.faltas < 2 ? 'green' : boletim?.faltas < 6 ? 'yellow' : 'red'}} className="alerta"></div>
          <div className="infos">

          <h2>Faltas</h2>
          <div className="nota">
            <p>Nota</p>
            <span>{boletim?.faltas}</span>
          </div>
          </div>
        </div>
      </div>
    </BoletimStyle>
  );
};
