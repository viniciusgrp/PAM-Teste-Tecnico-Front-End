import { useNavigate } from "react-router-dom";
import { HeaderComponent } from "../../components/header";
import { NotasProfessorComponent } from "../../components/professor/notas";
import { ProfessorPageStyle } from "./style";
import { useEffect } from "react";

export const ProfessorPage = () => {
  const navigate = useNavigate();

  const verify = () => {
    const token = localStorage.getItem("token") || "";
    if (!token) {
      navigate("/login");
    } else {
      const payload = token.split(".")[1];
      const decodedPayload: any = atob(payload);
      console.log(JSON.parse(decodedPayload).is_superuser);
      if (!JSON.parse(decodedPayload).is_superuser) {
        navigate("/home");
      }
    }
  };
  useEffect(() => {
    verify();
  }, []);
  return (
    <ProfessorPageStyle>
      <HeaderComponent />
      <NotasProfessorComponent />
    </ProfessorPageStyle>
  );
};
