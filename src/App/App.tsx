import { useState } from "react";
import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";
import { NewTransitionsModal } from "../components/NewTransitionModal";
import { GlobalStyle } from "../style/globalStyle";
import { TransitionsProvider } from "../hooks/useTransitions";


export function App() {

   const [isNewTransitionModalOpen, setIsNewTransitionModalOpen] = useState(false);

  function handleOpenNewModalTransitionModal() {
    setIsNewTransitionModalOpen(true);
  }

  function handleCloseNewModalTransitionModal() {
    setIsNewTransitionModalOpen(false);
  }

  return (
    <TransitionsProvider>
      <Header
        onOpenNewModalTransitionModal={handleOpenNewModalTransitionModal}
      />
      <Dashboard />
      
      <NewTransitionsModal 
        transitionModalOpen={isNewTransitionModalOpen} 
        transitionModalClose={handleCloseNewModalTransitionModal}
      />

      <GlobalStyle />
    </TransitionsProvider>
  );
}
