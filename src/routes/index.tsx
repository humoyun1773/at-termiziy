import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ScrollToTop } from '../components/layout/ScrollToTop';
import { LeadModal } from '../components/common/LeadModal';

// Pages
import { HomePage } from '../pages/HomePage';
import { CombinationsPage } from '../pages/CombinationsPage';
import { CoursesPage } from '../pages/CoursesPage';
import { AboutPage } from '../pages/AboutPage';
import { CareerPage } from '../pages/CareerPage';
import { ContactPage } from '../pages/ContactPage';
import { NotFoundPage } from '../pages/NotFoundPage';

/**
 * Root Layout Component containing global layout shell:
 * Navbar, Outlet, Footer, Global Modals, Floating Actions, and ScrollToTop
 */
const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-sky-500 selection:text-white transition-colors duration-200">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <LeadModal />
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
