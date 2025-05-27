import { motion } from 'framer-motion'
import MainFeature from '../components/MainFeature'
import ApperIcon from '../components/ApperIcon'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-yoga-pattern"
    >
      {/* Header */}
      <motion.header 
        variants={itemVariants}
        className="bg-white bg-opacity-90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center">
                <ApperIcon name="Flower2" className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                FlowBook
              </span>
            </motion.div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">Classes</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">Instructors</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">About</a>
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.button>
            </nav>

            <motion.button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ApperIcon name="Menu" className="w-6 h-6 text-gray-700" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <motion.section 
          variants={itemVariants}
          className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-emerald-800 text-white py-12 sm:py-20 lg:py-32"
        >
          <div className="absolute inset-0 bg-yoga-pattern opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div 
                className="text-center lg:text-left"
                variants={itemVariants}
              >
                <motion.h1 
                  className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6"
                  variants={itemVariants}
                >
                  Find Your Perfect
                  <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                    Yoga Flow
                  </span>
                </motion.h1>
                <motion.p 
                  className="text-lg sm:text-xl text-purple-100 mb-8 max-w-2xl"
                  variants={itemVariants}
                >
                  Book yoga classes instantly, manage your practice schedule, and connect with certified instructors. Your wellness journey starts here.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  variants={itemVariants}
                >
                  <motion.button 
                    className="btn-secondary text-lg px-8 py-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ApperIcon name="Calendar" className="w-5 h-5 mr-2" />
                    Book a Class
                  </motion.button>
                  <motion.button 
                    className="border-2 border-white text-white font-medium py-4 px-8 rounded-xl hover:bg-white hover:text-purple-800 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Schedule
                  </motion.button>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop&crop=center"
                    alt="Yoga class in session"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-transparent to-transparent opacity-60"></div>
                </div>
                <motion.div 
                  className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl p-4 sm:p-6 shadow-2xl"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl flex items-center justify-center">
                      <ApperIcon name="Users" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Active Members</p>
                      <p className="text-xl font-bold text-gray-900">2,847+</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Main Feature Section */}
        <motion.section 
          variants={itemVariants}
          className="py-12 sm:py-20 lg:py-32"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 lg:mb-16"
              variants={itemVariants}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Book Your Next Class
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our variety of yoga classes, select your preferred time, and secure your spot instantly.
              </p>
            </motion.div>
            <MainFeature />
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          variants={itemVariants}
          className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 lg:mb-16"
              variants={itemVariants}
            >
              Why Choose FlowBook?
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: "Clock",
                  title: "Real-time Booking",
                  description: "See live availability and book classes instantly with our real-time scheduling system."
                },
                {
                  icon: "Star",
                  title: "Certified Instructors",
                  description: "Learn from experienced, certified yoga instructors with diverse specialties and teaching styles."
                },
                {
                  icon: "Smartphone",
                  title: "Easy Management",
                  description: "Manage your bookings, view class history, and track your progress all in one place."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="booking-card p-6 lg:p-8 text-center group hover:scale-105"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6"
                    whileHover={{ rotate: 5 }}
                  >
                    <ApperIcon name={feature.icon} className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer 
        variants={itemVariants}
        className="bg-gray-900 text-white py-12 lg:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center">
                  <ApperIcon name="Flower2" className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">FlowBook</span>
              </div>
              <p className="text-gray-400 mb-6">
                Connecting you with the perfect yoga practice through seamless booking and community building.
              </p>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ApperIcon name={social} className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            {[
              {
                title: "Classes",
                links: ["Hatha Yoga", "Vinyasa Flow", "Power Yoga", "Yin Yoga"]
              },
              {
                title: "Support",
                links: ["Help Center", "Contact Us", "FAQ", "Pricing"]
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Press", "Blog"]
              }
            ].map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FlowBook. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  )
}

export default Home