import { useEffect, useState } from "react";
import { HeaderComponent } from "../../components/header";
import { HomeStyle } from "./style";
import { useNavigate } from "react-router-dom";
import { BoletimComponent } from "../../components/home/boletim";

export const HomePage = () => {
  const [userId, setUserId] = useState<number>(0);
  const navigate = useNavigate();

  const verify = () => {
    const token = localStorage.getItem("token") || "";
    if (!token) {
      navigate("/login");
    } else {
      const payload = token.split(".")[1];
      const decodedPayload: any = atob(payload);
      if (JSON.parse(decodedPayload).is_superuser) {
        navigate("/professor");
      }
      setUserId(JSON.parse(decodedPayload).user_id)
    }
  };

  useEffect(() => {
    verify();
  }, []);

  return (
    <HomeStyle>
      <HeaderComponent />
      <div className="container">
        <BoletimComponent/>
      </div>
    </HomeStyle>
  );
};
