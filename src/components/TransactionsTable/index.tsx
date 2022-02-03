import { useTranation } from "../../hooks/useTransation";
import { Conteiner } from "./styles"

export function TransactionsTable() {
    const { transferencias } = useTranation();
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
                                <td className={transferencia.radioType}>
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