import { LanguageProvider } from './context/LanguageContext';
import { ModalProvider } from './context/ModalContext';
import { ThemeProvider } from './context/ThemeContext';
import { AppRouter } from './routes';

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ModalProvider>
          <AppRouter />
        </ModalProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;