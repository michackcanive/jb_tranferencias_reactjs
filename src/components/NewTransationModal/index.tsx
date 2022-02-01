
import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import icome_entrada from "../../assets/icome.svg"
import icome_saida from "../../assets/icome_out.svg"
import { TransationContext } from "../../TransationContext";
import { Conteiner, TransationTypeConteiner, RadioType } from "./styles";

interface NewTransationModalProps {
    isOpen: boolean;
    OnResquesteClose: () => void;
}

export function NewTransationModal({ isOpen, OnResquesteClose }: NewTransationModalProps) {
    const{creatTransation}=useContext(TransationContext);

    
    const [title, setTitle] = useState('');
    const [radioType, setRadioType] = useState('deposito');
    const [valor, setValor] = useState(0);
    const [categoria, setCategoria] = useState('');

 async function hendleNewtransation(envet: FormEvent) {
        envet.preventDefault();
       await creatTransation({
            title,
            categoria,
            valor,
            radioType,
        });

        setTitle('');
        setValor(0);
        setRadioType('deposito')
        setCategoria('')
        
        OnResquesteClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={OnResquesteClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={OnResquesteClose}
                className="react-modal-close"
            >X</button>
            <Conteiner onSubmit={hendleNewtransation}>
                <h2>Cadastrar  Transações</h2>
                <input
                    type="text"
                    placeholder="Titulo"
                    value={title}
                    onChange={
                        envet => setTitle(envet.target.value)} />
                <input
                    type="number"
                    placeholder="Valor"
                    value={valor}
                    onChange={
                        envet => setValor(parseFloat(envet.target.value))} />
                <TransationTypeConteiner>
                    <RadioType
                        type="button"
                        onClick={() => { setRadioType('deposito'); }}
                        istypeRadio={radioType === 'deposito'}
                    >
                        <img src={icome_entrada} alt="entrada" className="img-type" />
                        <span>
                            Entrada
                        </span>
                    </RadioType>

                    <RadioType
                        type="button"
                        onClick={() => { setRadioType('withdraw'); }}
                        istypeRadio={radioType === 'withdraw'}
                    >
                        <img src={icome_saida} alt="entrada" className="img-type" />
                        <span>
                            Saida
                        </span>
                    </RadioType>
                </TransationTypeConteiner>

                <input
                    type="text"
                    placeholder="Categorio"
                    value={categoria}
                    onChange={
                        envet => setCategoria(envet.target.value)}
                />


                <button type="submit">Cadastrar</button>
            </Conteiner>
        </Modal>
    )
}