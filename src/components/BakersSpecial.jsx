import { motion } from 'framer-motion'
import pistachioCroissant from '../assets/pist-croiss.jpg'
import lavenderHoney from '../assets/lav-cake.jpg'
import matchaCake from '../assets/matcha-cake.jpg'

const BakersSpecial = () => {
  const specials = [
    {
      name: "Today's Special",
      description: "Lavender Honey Cake",
      details: "Light vanilla sponge infused with lavender, honey buttercream, topped with fresh berries",
      price: "$6.50/slice",
      tag: "LIMITED TIME",
      image: lavenderHoney
    },
    {
      name: "Weekend Special",
      description: "Pistachio Rose Croissants",
      details: "Buttery croissants filled with pistachio cream and rose water glaze",
      price: "$4.75 each",
      tag: "WEEKEND ONLY",
      image: pistachioCroissant
    },
    {
      name: "Weekly Feature",
      description: "Matcha Opera Cake",
      details: "Six layers of matcha goodness with dark chocolate ganache",
      price: "$7.00/slice",
      tag: "FEATURED",
      image: matchaCake
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-fredoka text-pink-600 mb-4">Baker's Special</h2>
          <p className="text-gray-600">Fresh from the oven, available for a limited time</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {specials.map((special, index) => (
            <motion.div
              key={special.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden group"
            >
              <div className="relative">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={special.image}
                  alt={special.description}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-pink-500 text-white text-sm px-3 py-1 rounded-full">
                  {special.tag}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-sm font-semibold text-pink-500 mb-2">{special.name}</h3>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{special.description}</h4>
                <p className="text-gray-600 text-sm mb-4">{special.details}</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-500 font-semibold">{special.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600 transition-colors"
                  >
                    Order Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BakersSpecial 