import { HeaderStyle } from "./style";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

export const HeaderComponent = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <HeaderStyle>
      <img src={Logo} alt="Logo da escola" />
      <nav>
        <ul>
          <Link to={"/home"}>Notas</Link>
          <Link to={"/perfil"}>Meu Perfil</Link>
          <li onClick={() => logOut()}>Sair</li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};
