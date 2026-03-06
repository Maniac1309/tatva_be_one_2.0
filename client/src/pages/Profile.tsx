import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Mock data for wellness insights
const wellnessInsights = {
  'early-bird': {
    title: 'Morning Energizer',
    description: 'You thrive in the early hours and maintain consistent energy throughout the day.',
    strengths: ['High morning productivity', 'Consistent routine', 'Natural circadian rhythm'],
    growthAreas: ['Evening wind-down routine', 'Flexibility in schedule', 'Afternoon energy management']
  },
  'night-owl': {
    title: 'Night Vision',
    description: 'Your creativity and focus peak in the evening, making you most productive during later hours.',
    strengths: ['Creative problem solving', 'Deep focus in quiet hours', 'Flexible schedule adaptation'],
    growthAreas: ['Morning routine establishment', 'Sleep schedule consistency', 'Daytime energy optimization']
  },
  'balanced': {
    title: 'Harmony Seeker',
    description: 'You maintain a flexible approach to your daily rhythm, adapting well to different schedules.',
    strengths: ['Adaptability', 'Work-life balance', 'Versatile energy management'],
    growthAreas: ['Routine consistency', 'Peak performance timing', 'Boundary setting']
  },
  'irregular': {
    title: 'Dynamic Explorer',
    description: 'You embrace a fluid schedule, finding energy in the unexpected moments of your day.',
    strengths: ['Spontaneity', 'Adaptability to change', 'Creative problem solving'],
    growthAreas: ['Schedule structure', 'Energy predictability', 'Routine establishment']
  }
};

const Profile = () => {
  const location = useLocation();
  const answers = location.state?.answers || {};
  const [activeTab, setActiveTab] = useState('overview');
  const [wellnessType, setWellnessType] = useState('balanced'); // Default type

  // Determine wellness type based on answers
  useEffect(() => {
    if (answers['daily-routine']) {
      setWellnessType(answers['daily-routine']);
    }
  }, [answers]);

  const insights = wellnessInsights[wellnessType as keyof typeof wellnessInsights] || wellnessInsights.balanced;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <span className="text-4xl">🧘</span>
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Wellness Profile</h1>
            <h2 className="text-xl text-primary-600 mb-4">{insights.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{insights.description}</p>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-lg p-4 mb-8">
            <div className="flex border-b border-gray-200">
              {['overview', 'insights', 'progress'].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Wellness DNA</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(answers).map(([questionId, answerId]) => (
                    <div key={questionId} className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2 capitalize">
                        {questionId.replace(/-/g, ' ')}
                      </h4>
                      <p className="text-gray-600 capitalize">
                        {String(answerId).replace(/-/g, ' ')}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'insights' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Wellness Insights</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Strengths</h4>
                    <ul className="space-y-2">
                      {insights.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-600 mr-2">✓</span>
                          <span className="text-gray-600">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Growth Areas</h4>
                    <ul className="space-y-2">
                      {insights.growthAreas.map((area, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-600 mr-2">→</span>
                          <span className="text-gray-600">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'progress' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Progress</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Wellness Score</span>
                      <span className="text-primary-600 font-medium">85%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <motion.div
                        className="h-full bg-primary-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Consistency</span>
                      <span className="text-primary-600 font-medium">78%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <motion.div
                        className="h-full bg-primary-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '78%' }}
                        transition={{ duration: 1, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Next Steps */}
          <div className="mt-8 text-center">
            <button className="btn-primary">
              View Your Personalized Recommendations
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile; 