import { HeaderComponent } from "../../components/header"
import { PerfilFormComponent } from "../../components/perfil/form"
import { PerfilPageStyle } from "./style"

export const PerfilPage = () => {
    return (
        <PerfilPageStyle>
            <HeaderComponent/>
            <div className="container">
            <PerfilFormComponent/>

            </div>
        </PerfilPageStyle>
    )
}