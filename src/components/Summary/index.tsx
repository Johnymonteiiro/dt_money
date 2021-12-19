import EntradaSvg from "../../assets/Entradas.svg";
import SaidaSvg from "../../assets/Saídas.svg";
import TotalSvg from "../../assets/Total.svg";
import { useTransitions } from "../../hooks/useTransitions";

import { Container } from "./style";

export function Summary() {
  const { transitions } = useTransitions();

  //Fazendo os calculos

  const summary = transitions.reduce(
    (acc, transition) => {
      if (transition.type === "deposito") {
        acc.deposito += transition.amount;
        acc.total += transition.amount;
      } else {
        acc.saida += transition.amount;
        acc.total -= transition.amount;
      }

      return acc;
    },
    {
      deposito: 0,
      saida: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entrada</p>
          <img src={EntradaSvg} alt="entrada" />
        </header>
        <strong>
          {
            //formatação de moeda
            new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.deposito)
          }
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={SaidaSvg} alt="entrada" />
        </header>
        <strong>-
          {
            //formatação de moeda
            new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.saida)
          }
        </strong>
      </div>
      <div className="totalBox">
        <header>
          <p>Total</p>
          <img src={TotalSvg} alt="entrada" />
        </header>
        <strong>
          {
            //formatação de moeda
            new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.total)
          }
        </strong>
      </div>
    </Container>
  );
}
