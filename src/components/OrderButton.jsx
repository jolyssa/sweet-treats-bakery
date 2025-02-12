import { motion } from 'framer-motion'
import { useState } from 'react'

const OrderButton = ({ children, className, href }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate loading state
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = href
    }, 1500)
  }

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative ${className}`}
    >
      <span className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
        {children}
      </span>
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-6 h-6 border-3 border-pink-200 border-t-pink-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}
    </motion.a>
  )
}

export default OrderButton 