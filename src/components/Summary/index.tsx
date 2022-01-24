import icome_entrada from "../../assets/icome.svg"
import icome_saida from "../../assets/icome_out.svg"
import icome_total from "../../assets/icome_total.svg"
import { Conteiner } from "./styles"

export function Summary() {

    return (
        <Conteiner>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={icome_entrada} alt="" />
                </header>
                <strong className="deposito" >AO: 2000.00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={icome_saida} alt="" />
                </header>
                <strong className="withdraw">-AO: 1000.00</strong>
            </div>
            <div className="total-bg">
                <header>
                    <p>Total</p>
                    <img src={icome_total} alt="" />
                </header>
                <strong>AO: 3000.00</strong>
            </div>
        </Conteiner>
    )
}