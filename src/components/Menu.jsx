import { motion } from 'framer-motion'

const menuCategories = [
  {
    title: "Pastries",
    items: [
      {
        name: 'Chocolate Croissant',
        description: 'Flaky pastry filled with rich Belgian chocolate',
        price: '$3.50',
      },
      {
        name: 'Almond Croissant',
        description: 'Buttery croissant filled with almond cream',
        price: '$4.00',
      },
      {
        name: 'Pain au Raisin',
        description: 'Spiral pastry with vanilla custard and raisins',
        price: '$3.75',
      },
    ],
  },
  {
    title: "Cakes & Tarts",
    items: [
      {
        name: 'Red Velvet Cake',
        description: 'Classic red velvet with cream cheese frosting',
        price: '$5.00',
      },
      {
        name: 'Lemon Meringue Tart',
        description: 'Tangy lemon curd topped with fluffy meringue',
        price: '$4.50',
      },
      {
        name: 'Fresh Fruit Tart',
        description: 'Vanilla pastry cream topped with seasonal fruits',
        price: '$4.75',
      },
    ],
  },
  {
    title: "Sweet Treats",
    items: [
      {
        name: 'Macarons',
        description: 'Assorted flavors, made fresh daily',
        price: '$2.50/each',
      },
      {
        name: 'Chocolate Truffles',
        description: 'Rich dark chocolate ganache truffles',
        price: '$3.00/2pc',
      },
      {
        name: 'Cookies',
        description: 'Choose from chocolate chip, oatmeal, or snickerdoodle',
        price: '$2.00/each',
      },
    ],
  },
  {
    title: "Beverages",
    items: [
      {
        name: 'Artisan Coffee',
        description: 'Locally roasted, served hot or iced',
        price: '$3.50',
      },
      {
        name: 'French Hot Chocolate',
        description: 'Rich and creamy dark hot chocolate',
        price: '$4.00',
      },
      {
        name: 'Tea Selection',
        description: 'Various organic loose leaf teas',
        price: '$3.00',
      },
    ],
  },
]

const Menu = () => {
  return (
    <section id="menu" className="py-20 px-4 bg-pink-50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-fredoka text-center text-pink-600 mb-12"
      >
        Our Menu
      </motion.h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {menuCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-fredoka text-pink-500 mb-6">{category.title}</h3>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                    className="group"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 group-hover:text-pink-500 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      </div>
                      <span className="text-pink-500 font-semibold">{item.price}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
