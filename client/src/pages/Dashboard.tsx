import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Wellness Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Daily Progress Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Today's Progress</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Daily Goals</span>
                  <span className="text-primary-600 font-medium">2/3 Completed</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary-600 rounded-full w-2/3"></div>
                </div>
              </div>
            </div>

            {/* Wellness Score Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Wellness Score</h2>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">85</div>
                <p className="text-gray-600">Great progress! Keep it up!</p>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-2">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activities</h2>
              <div className="space-y-4">
                {[
                  { activity: 'Morning Meditation', time: 'Today, 8:00 AM' },
                  { activity: 'Wellness Quiz Completed', time: 'Yesterday, 3:30 PM' },
                  { activity: 'Evening Yoga', time: 'Yesterday, 7:00 PM' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-900">{item.activity}</span>
                    <span className="text-gray-500 text-sm">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard; 