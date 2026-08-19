import React, { createContext, useContext, useState } from 'react';

interface ModalContextType {
  isOpen: boolean;
  openModal: (preset?: { combinationId?: number | string; languageName?: string }) => void;
  closeModal: () => void;
  modalPreset: { combinationId?: number | string; languageName?: string } | null;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalPreset, setModalPreset] = useState<{ combinationId?: number | string; languageName?: string } | null>(null);

  const openModal = (preset?: { combinationId?: number | string; languageName?: string }) => {
    setModalPreset(preset || null);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalPreset(null);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, modalPreset }}>
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
