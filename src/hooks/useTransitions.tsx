import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { api } from "../services/api";

interface Transitions {
  id: string;
  title: string;
  type: string;
  category: string;
  amount: number;
  createAt: string;
}

interface TransitionsProviderProps {
  children:ReactNode;
}

interface TransitionsContextData {//formato do contexto
   transitions: Transitions[];
   createTransitions: (transition: TransitionsInput)=> Promise<void>;
}

type TransitionsInput = Omit<Transitions,'id'| 'createAt'>;

 const TransitionsContext = createContext<TransitionsContextData>({} as TransitionsContextData) //FORÇANDO A TYPAGEM DO OBJETO;

export function TransitionsProvider ({children} :TransitionsProviderProps) {
  const [transitions, setTransitions] = useState<Transitions[]>([]);

  useEffect(() => {
    api
      .get("/transitions")
      .then((resp) => {
        setTransitions(resp.data.transitions)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  async function createTransitions (transitionInput:TransitionsInput){//atualizar as infor das transações de maneira dinamica
     const response = await api.post('/transitions',{
       ...transitionInput, createAt: new Date(),//botar a data
     });
     
      const { transition } = response.data;

    //   const dataJson = JSON.stringify(transition);
    //   localStorage.setItem('transations', dataJson );
    //   const transationsData = localStorage.getItem('transations');
   

    //  console.log(transationsData);
    //  console.log(transition);

     setTransitions([...transitions,transition])//imutabilidade
  }

  return(
    <TransitionsContext.Provider value={{ transitions, createTransitions }}>
       {children}
    </TransitionsContext.Provider>
  )

}

//personalizando o hook afimn de serem consumidos pelos componentes
export function useTransitions() {

  const context = useContext(TransitionsContext);

  return context;

}
