import { LanguageProvider } from './context/LanguageContext';
import { ModalProvider } from './context/ModalContext';
import { AppRouter } from './routes';

export function App() {
  return (
    <LanguageProvider>
      <ModalProvider>
        <AppRouter />
      </ModalProvider>
    </LanguageProvider>
  );
}

export default App;