import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-pink-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-fredoka text-center text-pink-600 mb-8"
        >
          Get in Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-700 justify-center md:justify-start">
                📍 123 Bakery Street, Sweet Town
              </p>
              <p className="flex items-center text-gray-700 justify-center md:justify-start">
                📞 (555) 123-4567
              </p>
              <p className="flex items-center text-gray-700 justify-center md:justify-start">
                ✉️ hello@sweettreats.com
              </p>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold mb-2">Hours of Operation</h4>
              <p className="text-gray-700">Tuesday - Sunday: 7am - 7pm</p>
              <p className="text-gray-700">Closed on Mondays</p>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-lg"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-200 rounded-2xl p-3 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all"
                placeholder="Your name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-200 rounded-2xl p-3 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all"
                placeholder="Your email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full border border-gray-200 rounded-2xl p-3 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all"
                placeholder="Your message"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-pink-500 text-white p-4 rounded-2xl hover:bg-pink-600 transition-colors duration-300 shadow-lg"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
