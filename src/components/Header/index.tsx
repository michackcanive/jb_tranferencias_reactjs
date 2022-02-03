import logotipo from "../../assets/logo.svg";
import { ConteinerHeader, Content } from "./styles";

interface HeaderOnpeModal{
    onOpenTrasantionModal:()=>void;
}
export function Header({onOpenTrasantionModal}:HeaderOnpeModal) {
    return (
        <ConteinerHeader>
            <Content> 
                <img src={logotipo} alt="Jb" />
                <button onClick={onOpenTrasantionModal} >
                    Nova Transferencia
                </button>
            </Content>
        </ConteinerHeader>
    )
}