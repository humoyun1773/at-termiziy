import React, { createContext, useContext, useState } from 'react';

interface ModalContextType {
  isOpen: boolean;
  openModal: (preset?: { combinationId?: number | string; languageName?: string }) => void;
  closeModal: () => void;
  modalPreset: { combinationId?: number | string; languageName?: string } | null;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modalPreset, setModalPreset] = useState<{ combinationId?: number | string; languageName?: string } | null>(null);

  const openModal = (preset?: { combinationId?: number | string; languageName?: string }) => {
    setModalPreset(preset || null);
    if (window.location.pathname !== '/contact') {
      window.location.href = '/contact';
    }
  };

  const closeModal = () => {
    setModalPreset(null);
  };

  return (
    <ModalContext.Provider value={{ isOpen: false, openModal, closeModal, modalPreset }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
