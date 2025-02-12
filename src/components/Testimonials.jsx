import { motion } from 'framer-motion'
import sarah from '../assets/sarah.jpg'
import michael from '../assets/michael.jpg'
import emma from '../assets/emma.jpg'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Wedding Client",
      text: "The custom wedding cake exceeded our expectations! Not only was it stunning, but it tasted amazing. Our guests couldn't stop talking about it!",
      image: sarah,
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Regular Customer",
      text: "I've been coming here for my morning croissant for 2 years now. The consistency and quality are unmatched. Best bakery in town!",
      image: michael,
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Birthday Celebration",
      text: "Ordered a custom birthday cake for my daughter. The attention to detail was incredible, and the taste was even better!",
      image: emma,
      rating: 5
    }
  ]

  return (
    <section className="py-20 px-4 bg-pink-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-fredoka text-pink-600 mb-4">Sweet Words</h2>
          <p className="text-gray-600">What our customers say about us</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-3xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-pink-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 