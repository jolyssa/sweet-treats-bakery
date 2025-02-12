import { motion } from 'framer-motion'
import { useState } from 'react'

const CakeBuilder = () => {
  const [step, setStep] = useState(1)
  const [selections, setSelections] = useState({
    size: '',
    flavor: '',
    filling: '',
    decorations: [],
  })
  
  const options = {
    sizes: [
      { name: '6" (serves 8)', price: 35 },
      { name: '8" (serves 12)', price: 45 },
      { name: '10" (serves 16)', price: 60 },
      { name: '12" (serves 24)', price: 75 }
    ],
    flavors: [
      { name: 'Classic Vanilla', price: 0 },
      { name: 'Rich Chocolate', price: 0 },
      { name: 'Red Velvet', price: 2 },
      { name: 'Carrot', price: 2 },
      { name: 'Lemon', price: 2 }
    ],
    fillings: [
      { name: 'Vanilla Buttercream', price: 0 },
      { name: 'Chocolate Ganache', price: 2 },
      { name: 'Fresh Berries', price: 4 },
      { name: 'Cream Cheese', price: 2 }
    ],
    decorations: [
      { name: 'Fresh Flowers', price: 8 },
      { name: 'Chocolate Shavings', price: 4 },
      { name: 'Fresh Fruit', price: 6 },
      { name: 'Custom Message', price: 3 }
    ]
  }

  const handleSelect = (category, item) => {
    if (category === 'decorations') {
      setSelections(prev => ({
        ...prev,
        decorations: prev.decorations.includes(item.name)
          ? prev.decorations.filter(d => d !== item.name)
          : [...prev.decorations, item.name]
      }))
    } else {
      setSelections(prev => ({
        ...prev,
        [category]: item.name
      }))
    }
  }

  const calculateTotal = () => {
    let total = 0
    
    // Add base price from size
    const selectedSize = options.sizes.find(s => s.name === selections.size)
    total += selectedSize?.price || 0

    // Add flavor price
    const selectedFlavor = options.flavors.find(f => f.name === selections.flavor)
    total += selectedFlavor?.price || 0

    // Add filling price
    const selectedFilling = options.fillings.find(f => f.name === selections.filling)
    total += selectedFilling?.price || 0

    // Add decoration prices
    selections.decorations.forEach(d => {
      const decoration = options.decorations.find(dec => dec.name === d)
      total += decoration?.price || 0
    })

    return total
  }

  const isStepComplete = () => {
    switch (step) {
      case 1: return selections.size
      case 2: return selections.flavor
      case 3: return selections.filling
      case 4: return true // Decorations are optional
      default: return false
    }
  }

  const handleSubmit = () => {
    alert('Order submitted! We will contact you soon.')
    // Reset form after submission
    setStep(1)
    setSelections({
      size: '',
      flavor: '',
      filling: '',
      decorations: [],
    })
  }

  return (
    <section id="cake-builder" className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-fredoka text-center text-pink-600 mb-12"
        >
          Design Your Dream Cake
        </motion.h2>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          {/* Progress Bar */}
          <div className="flex justify-between mb-12">
            {[1, 2, 3, 4, 5].map((num) => (
              <motion.div
                key={num}
                className={`w-1/5 h-2 rounded-full mx-1 ${
                  step >= num ? 'bg-pink-500' : 'bg-pink-100'
                }`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: step >= num ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={step}
          >
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Choose Your Size</h3>
                <div className="grid grid-cols-2 gap-4">
                  {options.sizes.map((size) => (
                    <motion.button
                      key={size.name}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSelect('size', size)}
                      className={`p-4 border-2 rounded-xl transition-all ${
                        selections.size === size.name
                          ? 'border-pink-500 bg-pink-50'
                          : 'border-pink-200 hover:border-pink-500 hover:bg-pink-50'
                      }`}
                    >
                      <div>{size.name}</div>
                      <div className="text-pink-500">${size.price}</div>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Select Your Flavor</h3>
                <div className="grid grid-cols-2 gap-4">
                  {options.flavors.map((flavor) => (
                    <motion.button
                      key={flavor.name}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSelect('flavor', flavor)}
                      className={`p-4 border-2 rounded-xl transition-all ${
                        selections.flavor === flavor.name
                          ? 'border-pink-500 bg-pink-50'
                          : 'border-pink-200 hover:border-pink-500 hover:bg-pink-50'
                      }`}
                    >
                      <div>{flavor.name}</div>
                      {flavor.price > 0 && <div className="text-pink-500">+${flavor.price}</div>}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Choose Your Filling</h3>
                <div className="grid grid-cols-2 gap-4">
                  {options.fillings.map((filling) => (
                    <motion.button
                      key={filling.name}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSelect('filling', filling)}
                      className={`p-4 border-2 rounded-xl transition-all ${
                        selections.filling === filling.name
                          ? 'border-pink-500 bg-pink-50'
                          : 'border-pink-200 hover:border-pink-500 hover:bg-pink-50'
                      }`}
                    >
                      <div>{filling.name}</div>
                      {filling.price > 0 && <div className="text-pink-500">+${filling.price}</div>}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Add Decorations</h3>
                <div className="grid grid-cols-2 gap-4">
                  {options.decorations.map((decoration) => (
                    <motion.button
                      key={decoration.name}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSelect('decorations', decoration)}
                      className={`p-4 border-2 rounded-xl transition-all ${
                        selections.decorations.includes(decoration.name)
                          ? 'border-pink-500 bg-pink-50'
                          : 'border-pink-200 hover:border-pink-500 hover:bg-pink-50'
                      }`}
                    >
                      <div>{decoration.name}</div>
                      <div className="text-pink-500">+${decoration.price}</div>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Your Custom Cake</h3>
                <div className="bg-pink-50 p-6 rounded-xl space-y-4">
                  <div className="flex justify-between">
                    <span>Size:</span>
                    <span className="font-semibold">{selections.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Flavor:</span>
                    <span className="font-semibold">{selections.flavor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Filling:</span>
                    <span className="font-semibold">{selections.filling}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Decorations:</span>
                    <span className="font-semibold">
                      {selections.decorations.length > 0 
                        ? selections.decorations.join(', ')
                        : 'None'}
                    </span>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between text-xl font-semibold">
                      <span>Total:</span>
                      <span className="text-pink-500">${calculateTotal()}</span>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                  className="w-full bg-pink-500 text-white py-4 rounded-xl hover:bg-pink-600 transition-colors mt-6"
                >
                  Place Order
                </motion.button>
              </div>
            )}
          </motion.div>

          {/* Navigation */}
          {step !== 5 && (
            <div className="flex justify-between mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(Math.max(1, step - 1))}
                className="px-6 py-3 bg-gray-100 rounded-xl text-gray-700 hover:bg-gray-200 transition-colors"
                disabled={step === 1}
              >
                Previous
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => isStepComplete() && setStep(Math.min(5, step + 1))}
                className={`px-6 py-3 rounded-xl text-white transition-colors ${
                  isStepComplete() ? 'bg-pink-500 hover:bg-pink-600' : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                {step === 4 ? 'Review Order' : 'Next'}
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default CakeBuilder 