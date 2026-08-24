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
  '/': '/images/bg-home.jpg',
  '/about': '/images/bg-about.jpg',
  '/courses': '/images/bg-courses.jpg',
  '/combinations': '/images/bg-combinations.jpg',
  '/career': '/images/bg-courses.jpg',
  '/contact': '/images/bg-about.jpg',
};

/**
 * Root Layout Component containing global layout shell:
 * Navbar, Outlet, Footer, Floating Actions, and ScrollToTop
 */
const RootLayout: React.FC = () => {
  const location = useLocation();
  const currentBg = pageBackgroundImages[location.pathname] || pageBackgroundImages['/'];

  return (
    <div className="min-h-screen flex flex-col text-slate-900 selection:bg-sky-500 selection:text-white relative">
      {/* Full Page Photographic Background Across ALL Pages */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img 
          key={currentBg}
          src={currentBg} 
          alt="Sahifa fon rasmi" 
          className="w-full h-full object-cover object-center scale-100"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
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
