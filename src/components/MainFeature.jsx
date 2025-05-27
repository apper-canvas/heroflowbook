import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-toastify'
import { format, addDays, isSameDay, startOfDay } from 'date-fns'
import ApperIcon from './ApperIcon'

const MainFeature = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedClass, setSelectedClass] = useState(null)
  const [bookingStep, setBookingStep] = useState('browse') // browse, details, confirm
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  // Mock class data
  const [classes, setClasses] = useState([
    {
      id: 1,
      title: "Morning Vinyasa Flow",
      instructor: "Sarah Johnson",
      time: "07:00",
      duration: 60,
      difficulty: "Intermediate",
      capacity: 20,
      enrolled: 15,
      price: 25,
      description: "Start your day with an energizing flow sequence that builds strength and flexibility.",
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Power Yoga",
      instructor: "Mike Chen",
      time: "09:00",
      duration: 75,
      difficulty: "Advanced",
      capacity: 15,
      enrolled: 12,
      price: 30,
      description: "High-intensity yoga practice that builds strength, stamina, and mental focus.",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Gentle Hatha",
      instructor: "Emma Wilson",
      time: "11:00",
      duration: 60,
      difficulty: "Beginner",
      capacity: 25,
      enrolled: 8,
      price: 20,
      description: "Slow-paced practice focusing on basic postures and breathing techniques.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Evening Yin Yoga",
      instructor: "David Kumar",
      time: "18:30",
      duration: 90,
      difficulty: "All Levels",
      capacity: 20,
      enrolled: 14,
      price: 28,
      description: "Meditative practice with longer-held poses to release tension and promote relaxation.",
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=250&fit=crop&crop=center"
    }
  ])

  const getDates = () => {
    const dates = []
    for (let i = 0; i < 7; i++) {
      dates.push(addDays(new Date(), i))
    }
    return dates
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-blue-100 text-blue-800 border-blue-200'
    }
  }

  const getAvailabilityColor = (enrolled, capacity) => {
    const ratio = enrolled / capacity
    if (ratio >= 0.9) return 'text-red-600'
    if (ratio >= 0.7) return 'text-yellow-600'
    return 'text-green-600'
  }

  const handleBookClass = (classItem) => {
    setSelectedClass(classItem)
    setBookingStep('details')
  }

  const handleConfirmBooking = async () => {
    if (!userInfo.name || !userInfo.email || !userInfo.phone) {
      toast.error('Please fill in all required fields')
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Update class enrollment
    setClasses(prev => prev.map(cls => 
      cls.id === selectedClass.id 
        ? { ...cls, enrolled: cls.enrolled + 1 }
        : cls
    ))

    setIsLoading(false)
    setBookingStep('confirm')
    toast.success(`Successfully booked ${selectedClass.title}!`)
  }

  const resetBooking = () => {
    setSelectedClass(null)
    setBookingStep('browse')
    setUserInfo({ name: '', email: '', phone: '' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
      className="w-full max-w-6xl mx-auto"
    >
      {/* Date Selection */}
      <motion.div variants={itemVariants} className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Date</h3>
        <div className="grid grid-cols-7 gap-2 sm:gap-3">
          {getDates().map((date, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedDate(date)}
              className={`p-2 sm:p-3 rounded-xl text-center transition-all duration-200 ${
                isSameDay(date, selectedDate)
                  ? 'bg-primary text-white shadow-lg transform scale-105'
                  : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-primary hover:shadow-md'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-xs sm:text-sm font-medium">
                {format(date, 'EEE')}
              </div>
              <div className="text-lg sm:text-xl font-bold mt-1">
                {format(date, 'd')}
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {bookingStep === 'browse' && (
          <motion.div
            key="browse"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            variants={containerVariants}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-lg font-semibold text-gray-900 mb-6"
            >
              Available Classes for {format(selectedDate, 'EEEE, MMMM d')}
            </motion.h3>
            
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {classes.map((classItem) => (
                <motion.div
                  key={classItem.id}
                  variants={itemVariants}
                  className="booking-card overflow-hidden group hover:scale-[1.02]"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-32 sm:h-40 overflow-hidden">
                    <img
                      src={classItem.image}
                      alt={classItem.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{classItem.instructor}</p>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(classItem.difficulty)}`}>
                        {classItem.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">{classItem.title}</h4>
                      <span className="text-lg font-bold text-primary">${classItem.price}</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {classItem.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <ApperIcon name="Clock" className="w-4 h-4 mr-1" />
                          {classItem.time}
                        </div>
                        <div className="flex items-center">
                          <ApperIcon name="Timer" className="w-4 h-4 mr-1" />
                          {classItem.duration}min
                        </div>
                      </div>
                      <div className={`text-sm font-medium ${getAvailabilityColor(classItem.enrolled, classItem.capacity)}`}>
                        {classItem.capacity - classItem.enrolled} spots left
                      </div>
                    </div>
                    
                    <motion.button
                      onClick={() => handleBookClass(classItem)}
                      disabled={classItem.enrolled >= classItem.capacity}
                      className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                        classItem.enrolled >= classItem.capacity
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'btn-primary hover:shadow-lg'
                      }`}
                      whileHover={classItem.enrolled < classItem.capacity ? { scale: 1.02 } : {}}
                      whileTap={classItem.enrolled < classItem.capacity ? { scale: 0.98 } : {}}
                    >
                      {classItem.enrolled >= classItem.capacity ? 'Fully Booked' : 'Book This Class'}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {bookingStep === 'details' && selectedClass && (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-2xl mx-auto"
          >
            <div className="booking-card p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Booking Details</h3>
                <motion.button
                  onClick={resetBooking}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ApperIcon name="X" className="w-5 h-5 text-gray-500" />
                </motion.button>
              </div>

              {/* Class Summary */}
              <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold mb-2">{selectedClass.title}</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="opacity-80">Date</p>
                    <p className="font-medium">{format(selectedDate, 'EEEE, MMM d')}</p>
                  </div>
                  <div>
                    <p className="opacity-80">Time</p>
                    <p className="font-medium">{selectedClass.time} ({selectedClass.duration}min)</p>
                  </div>
                  <div>
                    <p className="opacity-80">Instructor</p>
                    <p className="font-medium">{selectedClass.instructor}</p>
                  </div>
                  <div>
                    <p className="opacity-80">Price</p>
                    <p className="font-medium text-lg">${selectedClass.price}</p>
                  </div>
                </div>
              </div>

              {/* User Information Form */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Your Information</h4>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                    className="form-input"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={userInfo.phone}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, phone: e.target.value }))}
                    className="form-input"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-6">
                  <motion.button
                    onClick={resetBooking}
                    className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    onClick={handleConfirmBooking}
                    disabled={isLoading}
                    className="flex-1 btn-primary flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <ApperIcon name="CreditCard" className="w-5 h-5 mr-2" />
                        Confirm & Pay ${selectedClass.price}
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {bookingStep === 'confirm' && selectedClass && (
          <motion.div
            key="confirm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="booking-card p-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <ApperIcon name="Check" className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Booking Confirmed!
              </h3>
              
              <p className="text-gray-600 mb-6">
                Your spot in <strong>{selectedClass.title}</strong> has been reserved for {format(selectedDate, 'EEEE, MMMM d')} at {selectedClass.time}.
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
                <h4 className="font-semibold text-gray-900 mb-3">Booking Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Class:</span>
                    <span className="font-medium">{selectedClass.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date & Time:</span>
                    <span className="font-medium">{format(selectedDate, 'MMM d')} at {selectedClass.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Instructor:</span>
                    <span className="font-medium">{selectedClass.instructor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount Paid:</span>
                    <span className="font-medium">${selectedClass.price}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-6">
                A confirmation email has been sent to {userInfo.email} with your booking details and studio location.
              </p>

              <motion.button
                onClick={resetBooking}
                className="btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Another Class
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default MainFeature