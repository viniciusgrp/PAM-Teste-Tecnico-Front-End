import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/loginSignup";
import { HomePage } from "../pages/home";
import { ProfessorPage } from "../pages/professor";
import { PerfilPage } from "../pages/perfil";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/professor",
    element: <ProfessorPage />,
  },
  {
    path: "/perfil",
    element: <PerfilPage />,
  },
]);
