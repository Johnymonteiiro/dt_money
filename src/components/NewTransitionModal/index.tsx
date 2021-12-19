import { FormEvent, useState } from "react";
import { useTransitions } from "../../hooks/useTransitions";
import Modal from "react-modal";
import { Container, TransitionsBottonsActions,RadioBox } from "./style";
import CloseImg from "../../assets/fechar.svg";
import EntradaImg from "../../assets/Entradas.svg";
import SaidaImg from "../../assets/Saídas.svg";



interface NewtransitionsModalProps{

    transitionModalOpen: boolean;
    transitionModalClose:()=> void;
}

Modal.setAppElement('#root');

//Principal function:

export function NewTransitionsModal({transitionModalOpen, transitionModalClose} : NewtransitionsModalProps) {

  const { createTransitions } = useTransitions();

  const[type, setType] = useState('deposito');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  async function handleCreateNewTransitions (event: FormEvent) {

       event.preventDefault();
       setTitle('');
       setAmount(0);
       setCategory('')
       setType('deposito')
  
       //Enviando os dados na api pelo metodo post
       await createTransitions({
         title,
         amount,
         category,
         type
       })

       transitionModalClose();
  }

  return (
      <Modal
        isOpen={transitionModalOpen}
        onRequestClose={transitionModalClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
          <button type="button" 
            onClick={transitionModalClose}
            className="react-modal-close"
          >
              <img src={CloseImg} alt="fechar Modal" />
          </button>
      <Container onSubmit={handleCreateNewTransitions}>
         <h1>Cadastrar transação</h1>

        <input placeholder="Titulo"
         value={title}
         onChange={e=> setTitle(e.target.value)}
        />

        <input type="number" 
          placeholder="Valor"
          value={amount}
          onChange={e=> setAmount(Number(e.target.value))}
         />

        <TransitionsBottonsActions>

          <RadioBox type="button"
            className="deposito"
            isActive={type === 'deposito'}
            activeColor="green"
            onClick={()=> setType('deposito')}
          >
            <img src={EntradaImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox type="button"
           className="btn-saida"
           isActive={type === 'saida'}//propriedade do button
           activeColor="red"
           onClick={()=> setType('saida')}
          >
            <img src={SaidaImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>

        </TransitionsBottonsActions>

        <input 
          placeholder="Categoria"
          value={category}
          onChange={e=> setCategory(e.target.value)}
        />

         <button type="submit">Cadastrar</button>
      </Container>
      </Modal>
  );
}
