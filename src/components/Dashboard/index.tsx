import { Summary } from "../Summary"
import { TransitionTable } from "../Transitions"
import { Container } from "./style"


export function Dashboard (){
    return(
        <>
          <Container>
              <Summary/>
              <TransitionTable/>
          </Container>
        </>
    )
}