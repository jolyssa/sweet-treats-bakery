import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'

const Navbar = () => {
  const { scrollYProgress } = useScroll()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.95)']
  )

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed w-full z-50 shadow backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-pink-500 text-xl md:text-2xl font-fredoka">
            Sweet Treats
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg 
              className="w-6 h-6 text-gray-700" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8">
            {['Home', 'Menu', 'About', 'Contact'].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-pink-500 transition-colors"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <ul className="pt-4 pb-2">
              {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                <motion.li key={item} className="mb-2">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 text-gray-700 hover:text-pink-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
