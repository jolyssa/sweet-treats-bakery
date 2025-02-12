import { motion } from 'framer-motion'

const Hero = () => {
  // Add floating decoration elements
  const decorElements = [
    { emoji: "🧁", delay: 0 },
    { emoji: "🍰", delay: 1.5 },
    { emoji: "🎂", delay: 0.8 },
    { emoji: "🍪", delay: 2 },
  ];

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="bg-pink-100 text-center pt-48 pb-40 px-4 overflow-hidden relative">
      {/* Add floating decorative elements */}
      {decorElements.map((elem, index) => (
        <motion.span
          key={index}
          className={`absolute text-3xl opacity-20 hidden md:block`}
          style={{
            top: `${20 + (index * 15)}%`,
            left: `${10 + (index * 25)}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: elem.delay }}
          {...floatAnimation}
        >
          {elem.emoji}
        </motion.span>
      ))}
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-fredoka text-pink-600 mb-6 px-4"
      >
        Welcome to Sweet Treats
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto px-4"
      >
        Crafting moments of joy with every bite since 1995. Our artisanal pastries blend traditional recipes with modern creativity.
      </motion.p>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        <motion.a
          href="#menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-pink-600 transition w-64 md:w-auto"
        >
          Explore Our Menu
        </motion.a>
        <motion.a
          href="#cake-builder"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-pink-500 px-8 py-4 rounded-full shadow-lg hover:bg-pink-50 transition w-64 md:w-auto"
        >
          Design Your Cake
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
