import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Quiz steps
const QUIZ_STEPS = [
  {
    id: 'who-are-you',
    title: 'Who Are You?',
    description: 'Let\'s understand your lifestyle and preferences.',
    questions: [
      {
        id: 'daily-routine',
        question: 'What best describes your daily routine?',
        options: [
          { id: 'early-bird', label: 'Early Bird - Up at dawn, productive mornings' },
          { id: 'night-owl', label: 'Night Owl - Most productive in the evening' },
          { id: 'balanced', label: 'Balanced - Flexible schedule throughout the day' },
          { id: 'irregular', label: 'Irregular - Varies significantly day to day' }
        ]
      },
      {
        id: 'energy-pattern',
        question: 'How would you describe your energy patterns?',
        options: [
          { id: 'high-consistent', label: 'High and consistent throughout the day' },
          { id: 'morning-peak', label: 'Peaks in the morning, declines in afternoon' },
          { id: 'afternoon-peak', label: 'Builds up during the day, peaks in afternoon' },
          { id: 'fluctuating', label: 'Fluctuates frequently throughout the day' }
        ]
      },
      {
        id: 'work-environment',
        question: 'What is your ideal work/study environment?',
        options: [
          { id: 'quiet-solitary', label: 'Quiet and solitary for deep focus' },
          { id: 'background-noise', label: 'Some background noise or music' },
          { id: 'collaborative', label: 'Collaborative with others nearby' },
          { id: 'outdoors', label: 'Outdoors or with natural elements' }
        ]
      },
      {
        id: 'social-preference',
        question: 'How do you prefer to socialize?',
        options: [
          { id: 'small-groups', label: 'Small, intimate groups' },
          { id: 'large-gatherings', label: 'Large gatherings and events' },
          { id: 'one-on-one', label: 'One-on-one conversations' },
          { id: 'minimal', label: 'Minimal social interaction' }
        ]
      }
    ]
  },
  {
    id: 'goals',
    title: 'Your Wellness Goals',
    description: 'What are you looking to achieve?',
    questions: [
      {
        id: 'primary-goal',
        question: 'What is your primary wellness goal?',
        options: [
          { id: 'energy', label: 'Increase energy levels' },
          { id: 'stress', label: 'Reduce stress and anxiety' },
          { id: 'focus', label: 'Improve focus and productivity' },
          { id: 'sleep', label: 'Better sleep quality' },
          { id: 'social', label: 'Enhance social connections' }
        ]
      },
      {
        id: 'timeframe',
        question: 'What is your preferred timeframe for achieving these goals?',
        options: [
          { id: 'short-term', label: 'Short-term (1-3 months)' },
          { id: 'medium-term', label: 'Medium-term (3-6 months)' },
          { id: 'long-term', label: 'Long-term (6+ months)' },
          { id: 'ongoing', label: 'Ongoing lifestyle change' }
        ]
      }
    ]
  },
  {
    id: 'methods',
    title: 'Preferred Methods',
    description: 'How do you like to practice wellness?',
    questions: [
      {
        id: 'meditation',
        question: 'Which meditation approach appeals to you most?',
        options: [
          { id: 'guided', label: 'Guided meditation with instructions' },
          { id: 'silent', label: 'Silent meditation' },
          { id: 'movement', label: 'Movement-based meditation (yoga, tai chi)' },
          { id: 'mindfulness', label: 'Mindfulness in daily activities' }
        ]
      },
      {
        id: 'physical',
        question: 'What type of physical activity do you enjoy?',
        options: [
          { id: 'cardio', label: 'Cardio (running, cycling, swimming)' },
          { id: 'strength', label: 'Strength training' },
          { id: 'flexibility', label: 'Flexibility and stretching' },
          { id: 'sports', label: 'Team sports or games' }
        ]
      },
      {
        id: 'reflection',
        question: 'How do you prefer to reflect and process?',
        options: [
          { id: 'journaling', label: 'Journaling and writing' },
          { id: 'talking', label: 'Talking with others' },
          { id: 'art', label: 'Creative expression (art, music)' },
          { id: 'nature', label: 'Time in nature' }
        ]
      }
    ]
  }
];

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (questionId: string, answerId: string) => {
    setAnswers({
      ...answers,
      [questionId]: answerId
    });
  };

  const handleNext = () => {
    if (currentStep < QUIZ_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
      // In a real app, we would submit the answers to the backend here
      console.log('Quiz completed!', answers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleViewResults = () => {
    navigate('/profile', { state: { answers } });
  };

  const currentStepData = QUIZ_STEPS[currentStep];
  const currentQuestion = currentStepData.questions[0];
  const progress = ((currentStep + 1) / QUIZ_STEPS.length) * 100;

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Quiz Complete!</h2>
            <p className="text-gray-700 mb-8">
              Thank you for completing the TatvaBeOne wellness quiz. We're analyzing your responses to create your personalized wellness profile.
            </p>
            <div className="flex justify-center">
              <button 
                className="btn-primary"
                onClick={handleViewResults}
              >
                View Your Results
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="h-2 bg-gray-200 rounded-full">
              <motion.div
                className="h-full bg-primary-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <motion.div 
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{currentStepData.title}</h2>
              <p className="text-gray-600">{currentStepData.description}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{currentQuestion.question}</h3>
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <div 
                    key={option.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      answers[currentQuestion.id] === option.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                    onClick={() => handleAnswer(currentQuestion.id, option.id)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Step {currentStep + 1} of {QUIZ_STEPS.length}
              </div>
              <div className="flex gap-4">
                {currentStep > 0 && (
                  <button 
                    className="btn-outline"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                )}
                <button 
                  className="btn-primary"
                  onClick={handleNext}
                  disabled={!answers[currentQuestion.id]}
                >
                  {currentStep < QUIZ_STEPS.length - 1 ? 'Next' : 'Complete'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;