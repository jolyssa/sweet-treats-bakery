import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Toast = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show toast after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 2000);
    // Hide toast after 8 seconds
    const hideTimer = setTimeout(() => setIsVisible(false), 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          className="fixed bottom-4 right-4 bg-white rounded-2xl shadow-lg p-4 z-50 max-w-sm"
        >
          <div className="flex items-center space-x-4">
            <div className="min-w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🧁</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Today's Special!</h3>
              <p className="text-sm text-gray-600">Fresh Strawberry Croissants just came out of the oven!</p>
            </div>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast