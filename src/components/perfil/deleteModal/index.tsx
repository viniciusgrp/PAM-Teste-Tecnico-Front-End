import { Dispatch, SetStateAction } from "react";
import { DeleteModalStyle } from "./style";
import { api } from "../../../services";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

interface IProps {
  userId: number | null;
  showModal: Dispatch<SetStateAction<boolean>>;
}

export const DeleteModalComponent = ({ userId, showModal }: IProps) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await api.delete(`/users/${userId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/login");
      showModal(false);
    } catch (error) {
      toast.error("Erro ao excluir conta");
      console.error(error);
    }
  };
  return (
    <DeleteModalStyle onClick={() => showModal(false)}>
      <ToastContainer />
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <h2>Deseja excluir sua conta ?</h2>
        <p>Essa ação é irreversível</p>
        <div className="buttons">
          <button onClick={() => showModal(false)} type="button">
            Cancelar
          </button>
          <button
            onClick={() => handleDelete()}
            type="button"
            className="deleteButton"
          >
            Excluir
          </button>
        </div>
      </div>
    </DeleteModalStyle>
  );
};
