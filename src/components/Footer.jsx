import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 px-4 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-fredoka text-2xl text-pink-500 mb-4">Sweet Treats</h3>
            <p className="text-gray-600">
              Bringing sweetness to your everyday moments since 1995.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Menu', 'Contact'].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-pink-500 transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Tue-Fri: 7am - 7pm</li>
              <li>Sat: 8am - 8pm</li>
              <li>Sun: 8am - 6pm</li>
              <li>Mon: Closed</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
            <ul className="space-y-2">
              {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                <motion.li key={social}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={`https://www.${social.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    {social}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Sweet Treats Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
