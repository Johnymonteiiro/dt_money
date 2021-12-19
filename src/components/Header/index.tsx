import { Container, Coontent } from "./style";
import LogoImg from "../../assets/Logo.svg";

interface HeaderProps {
  onOpenNewModalTransitionModal: () => void;
}

export function Header({ onOpenNewModalTransitionModal }: HeaderProps) {
  return (
    <Container>
      <Coontent>
        <img src={LogoImg} alt="logo" />
        <button type="button" onClick={onOpenNewModalTransitionModal}>
          Cadastrar nova transação
        </button>
      </Coontent>
    </Container>
  );
}
