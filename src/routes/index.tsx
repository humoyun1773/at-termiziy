import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ScrollToTop } from '../components/layout/ScrollToTop';

// Pages
import { HomePage } from '../pages/HomePage';
import { CombinationsPage } from '../pages/CombinationsPage';
import { CoursesPage } from '../pages/CoursesPage';
import { AboutPage } from '../pages/AboutPage';
import { CareerPage } from '../pages/CareerPage';
import { ContactPage } from '../pages/ContactPage';
import { NotFoundPage } from '../pages/NotFoundPage';

const pageBackgroundImages: Record<string, string> = {
  '/': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920',
  '/about': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1920',
  '/courses': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1920',
  '/combinations': 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1920',
  '/career': 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1920',
  '/contact': 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1920',
};

/**
 * Root Layout Component containing global layout shell:
 * Navbar, Outlet, Footer, Floating Actions, and ScrollToTop
 */
const RootLayout: React.FC = () => {
  const location = useLocation();
  const currentBg = pageBackgroundImages[location.pathname] || pageBackgroundImages['/'];

  return (
    <div className="min-h-screen flex flex-col bg-slate-100/60 text-slate-900 selection:bg-sky-500 selection:text-white relative">
      {/* Full Page Photographic Background Across ALL Pages */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <img 
          key={currentBg}
          src={currentBg} 
          alt="Sahifa fon rasmi" 
          className="w-full h-full object-cover object-center scale-105 transition-all duration-700 opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-sky-50/75 to-white/90 backdrop-blur-[0.5px]" />
      </div>

      <ScrollToTop />
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  );
};

/**
 * Router configuration defined separately in dedicated routes/ folder
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'combinations',
        element: <CombinationsPage />
      },
      {
        path: 'courses',
        element: <CoursesPage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'career',
        element: <CareerPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]);

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
