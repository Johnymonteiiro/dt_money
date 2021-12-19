
import { useTransitions } from "../../hooks/useTransitions"
import { Container } from "./style"

export function TransitionTable (){

    const { transitions } = useTransitions();

    return(
        <> 
           <Container>
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
                      {transitions.map(transition =>{
                          return(
                            <tr key={transition.id}>
                              <td >{transition.title}</td>
                              <td className={transition.type}>
                                 {//formatação de moeda
                                  new Intl.NumberFormat('pt-BR',{
                                      style:'currency',
                                      currency: 'BRL'
                                  }).format(transition.amount)
                                 }
                              </td>
                              <td>{transition.category}</td>
                              <td>
                                {//formatação de data
                                  new Intl.DateTimeFormat('pt-BR',).format(
                                      new Date(transition.createAt)
                                  )
                                 }
                              </td>
                            </tr>
                          )
                      })}
                   </tbody>
               </table>
           </Container>.
        </>
    )
}