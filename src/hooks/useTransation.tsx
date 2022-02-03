
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../server/api";

interface Tranferencia {
    id: number,
    title: string,
    valor: number,
    createAt: string,
    radioType: string,
    categoria: string
}
type TrasantionInput = Omit<Tranferencia, 'id' | 'createAt'>

interface TransationOperacao {
    transferencias: Tranferencia[],
    creatTransation: (transation: TrasantionInput) => Promise<void>;
}
interface TransationProderProps {
    children: ReactNode
}

export const TransationContext = createContext<TransationOperacao>(
    {} as TransationOperacao
);

export function TransationProvider({ children }: TransationProderProps) {
    const [transferencias, setTransferencias] = useState<Tranferencia[]>([]);

    useEffect(() => {
        api.get('tranferencias')
            .then(response => setTransferencias(response.data.transferencias))
    }, [])

    async function creatTransation(transationinput: TrasantionInput) {
        const response = await api.post('/tranferencias', {
            ...transationinput, createAt: new Date()
        })
        setTransferencias([...transferencias, response.data.transferencias])
    }

    return (
        <TransationContext.Provider value={{ transferencias, creatTransation }}>
            {children}
        </TransationContext.Provider>
    )


}

export function useTranation(){
    const context=useContext(TransationContext);
    return context;
}