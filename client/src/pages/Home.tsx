import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Discover Your <span className="text-primary-600">Wellness DNA</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              TatvaBeOne 2.0 helps you understand your unique wellness profile and guides you on a personalized journey to better health and well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quiz" className="btn-primary text-center">
                Take the Quiz
              </Link>
              <Link to="/about" className="btn-outline text-center">
                Learn More
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-secondary-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-200 rounded-full opacity-50"></div>
              <img 
                src="/placeholder-wellness.jpg" 
                alt="Wellness Journey" 
                className="rounded-lg shadow-xl relative z-10"
              />
            </div>
          </motion.div>
        </div>
        
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Take the Quiz',
                description: 'Answer a series of questions about your lifestyle, preferences, and goals.',
                icon: '📝'
              },
              {
                title: 'Discover Your Profile',
                description: 'Get insights into your unique wellness DNA and personalized recommendations.',
                icon: '🔍'
              },
              {
                title: 'Start Your Journey',
                description: 'Follow your customized wellness plan and track your progress over time.',
                icon: '🚀'
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 