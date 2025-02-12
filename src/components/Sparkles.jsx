import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Sparkles = () => {
  const [sparkles, setSparkles] = useState([])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (Math.random() > 0.9) { // Only create sparkles 10% of the time
        const sparkle = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
        }
        
        setSparkles((prev) => [...prev, sparkle])
        
        // Remove sparkle after animation
        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id))
        }, 500)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <AnimatePresence>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="sparkle"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          style={{
            left: sparkle.x,
            top: sparkle.y,
            background: 'radial-gradient(circle, #ffd1dc 0%, #ff69b4 100%)'
          }}
        />
      ))}
    </AnimatePresence>
  )
}

export default Sparkles 