import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ScrollToTop } from '../components/layout/ScrollToTop';
import { PageLoader } from '../components/common/PageLoader';
import { TopProgressBar } from '../components/common/TopProgressBar';

// Lazy-loaded Pages for instant loading and code splitting
const HomePage = lazy(() => import('../pages/HomePage').then(m => ({ default: m.HomePage })));
const CombinationsPage = lazy(() => import('../pages/CombinationsPage').then(m => ({ default: m.CombinationsPage })));
const CoursesPage = lazy(() => import('../pages/CoursesPage').then(m => ({ default: m.CoursesPage })));
const AboutPage = lazy(() => import('../pages/AboutPage').then(m => ({ default: m.AboutPage })));
const CareerPage = lazy(() => import('../pages/CareerPage').then(m => ({ default: m.CareerPage })));
const ContactPage = lazy(() => import('../pages/ContactPage').then(m => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

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
 * Navbar, Outlet, Footer, Floating Actions, ScrollToTop, and Page Loading Progress
 */
const RootLayout: React.FC = () => {
  const location = useLocation();
  const currentBg = pageBackgroundImages[location.pathname] || pageBackgroundImages['/'];

  return (
    <div className="min-h-screen flex flex-col text-slate-900 selection:bg-sky-500 selection:text-white relative">
      {/* Top Interactive Page Loading Bar */}
      <TopProgressBar />

      {/* Full Page Background Across ALL Pages (100% Pure Image, No Blue/Dark Overlay) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img 
          key={currentBg}
          src={currentBg} 
          alt="Sahifa fon rasmi" 
          className="w-full h-full object-cover object-center scale-100"
        />
      </div>

      <ScrollToTop />
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </Suspense>
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
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        )
      },
      {
        path: 'combinations',
        element: (
          <Suspense fallback={<PageLoader />}>
            <CombinationsPage />
          </Suspense>
        )
      },
      {
        path: 'courses',
        element: (
          <Suspense fallback={<PageLoader />}>
            <CoursesPage />
          </Suspense>
        )
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<PageLoader />}>
            <AboutPage />
          </Suspense>
        )
      },
      {
        path: 'career',
        element: (
          <Suspense fallback={<PageLoader />}>
            <CareerPage />
          </Suspense>
        )
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ContactPage />
          </Suspense>
        )
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFoundPage />
          </Suspense>
        )
      }
    ]
  }
]);

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

