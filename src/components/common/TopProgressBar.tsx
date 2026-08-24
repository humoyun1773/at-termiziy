import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const TopProgressBar: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none h-1 bg-transparent"
        >
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: ['0%', '70%', '100%'] }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-sky-400 via-blue-500 to-amber-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
