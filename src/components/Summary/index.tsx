import icome_entrada from "../../assets/icome.svg"
import icome_saida from "../../assets/icome_out.svg"
import icome_total from "../../assets/icome_total.svg"
import { useTranation } from "../../hooks/useTransation";
import { Conteiner } from "./styles"

export function Summary() {
    // Hooks criado para buscar os dados
    const { transferencias } = useTranation();

    const summary = transferencias.reduce((acc, transferencia) => {
        if (transferencia.radioType === 'deposito') {
            acc.deposito = acc.deposito + transferencia.valor;
            acc.total = acc.total + transferencia.valor;
        } else {
            acc.withdraw = acc.withdraw + transferencia.valor;
            acc.total = acc.total - transferencia.valor;
        }
        return acc;
    }, {
        deposito: 0,
        withdraw: 0,
        total: 0
    });

    return (
        <Conteiner>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={icome_entrada} alt="" />
                </header>
                <strong className="deposito" > {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.deposito)}</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={icome_saida} alt="" />
                </header>
                <strong className="withdraw">-{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.withdraw)}</strong>
            </div>
            <div className="total-bg">
                <header>
                    <p>Total</p>
                    <img src={icome_total} alt="" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.total)}</strong>
            </div>
        </Conteiner>
    )
}