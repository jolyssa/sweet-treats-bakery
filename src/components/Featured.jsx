import { motion } from 'framer-motion'
import croissant from '../assets/croissant.jpg'
import eclair from '../assets/chocolate eclair.jpg'
import berryTart from '../assets/berry tart.jpg'


const Featured = () => {
  const featuredItems = [
    {
      name: "Classic Croissant",
      description: "Buttery, flaky, and perfectly golden",
      price: "$3.50",
      image: croissant
    },
    {
      name: "Chocolate Eclair",
      description: "Filled with rich chocolate cream",
      price: "$4.50",
      image: eclair
    },
    {
      name: "Fresh Berry Tart",
      description: "Seasonal berries on vanilla custard",
      price: "$5.50",
      image: berryTart
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-fredoka text-center text-pink-600 mb-12"
        >
          Featured Treats
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover-lift"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-pink-500 font-semibold">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured
