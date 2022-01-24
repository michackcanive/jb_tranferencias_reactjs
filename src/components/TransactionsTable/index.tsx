
import { useEffect, useState } from "react"
import { api } from "../../server/api"
import { Conteiner } from "./styles"

interface tranferencia {
    id: number,
    title: string,
    valor: number,
    createAt: string,
    tipo: string,
    categoria: string
}
export function TransactionsTable() {
    const [transferencias, setTransferencias] = useState<tranferencia[]>([]);


    useEffect(() => {
        api.get('tranferencias')
            .then(response => setTransferencias(response.data.transferencias))
    }, [])


    return (
        <Conteiner>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        transferencias.map(transferencia => (
                            <tr key={transferencia.id}>
                                <td className="title">{transferencia.title}</td>
                                <td className={transferencia.tipo}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transferencia.valor)}
                                </td>
                                <td>{transferencia.categoria}</td>
                                <td>
                                {new Intl.DateTimeFormat('pt-BR').format(new Date(transferencia.createAt))}</td>
                            </tr>
                        ))
                    }



                </tbody>
            </table>
        </Conteiner>
    )
}