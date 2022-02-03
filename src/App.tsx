import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransationModal } from "./components/NewTransationModal";
import { GlobalStyle } from "./styles/global";
import { TransationProvider } from "./hooks/useTransation";

Modal.setAppElement('#root');

export function App() {
  const [isNewtransationModalOpen, setIsNewtransationModalOpen] = useState(false);

  function handleOpenNewTransationModal() {
    setIsNewtransationModalOpen(true);
  }
  function handleCloseNewTransationModal() {
    setIsNewtransationModalOpen(false);
  }
  

  return (
    <TransationProvider >
      <GlobalStyle />
      <Header onOpenTrasantionModal={handleOpenNewTransationModal} />
      <Dashboard />
      <NewTransationModal
        isOpen={isNewtransationModalOpen}
        OnResquesteClose={handleCloseNewTransationModal}
      />
    </TransationProvider>
  );
} 