import { motion } from 'framer-motion'

const About = () => {
  const features = [
    {
      title: "Artisanal Excellence",
      description: "Every pastry is handcrafted with premium ingredients and decades of expertise.",
      icon: "🎨"
    },
    {
      title: "Family Heritage",
      description: "Three generations of baking tradition, bringing European techniques to your neighborhood.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Fresh Daily",
      description: "We bake everything fresh each morning, using locally-sourced ingredients when possible.",
      icon: "🌅"
    },
    {
      title: "Custom Orders",
      description: "Special occasion? We create custom desserts tailored to your celebrations.",
      icon: "🎂"
    }
  ]

  return (
    <section id="about" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-fredoka text-pink-600 mb-6">Our Sweet Story</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            At Sweet Treats Bakery, we've been bringing smiles to our community since 1995. What started as a small family kitchen has grown into a beloved neighborhood destination, where every pastry tells a story and every customer becomes part of our extended family.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-pink-50 p-6 rounded-2xl text-center hover:bg-pink-100 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-pink-500 font-semibold mb-4">VISIT US TODAY</p>
          <p className="text-gray-700">
            123 Bakery Street, Sweet Town • Open Tuesday-Sunday, 7am-7pm
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About